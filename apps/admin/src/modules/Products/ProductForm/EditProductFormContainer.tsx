import { useDisclosure, useToast } from '@3shop/ui';
import { useForm, FormProvider } from 'react-hook-form';

import { DeleteProductModal } from './DeleteProductModal';
import { ProductForm } from './ProductForm';
import type { EditProductFormValues } from './types';

import type { EditProductMutationVariables, Gate, Product } from '@3shop/apollo';
import { useDeleteProductMutation, useEditProductMutation } from '@3shop/apollo';
import {
  ERROR_MESSAGE,
  getDeleteProductSuccessMessage,
  getEditProductSuccessMessage,
} from '@3shop/messages';
import { getObjectPathFromImageUrl } from '@3shop/pure';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { ADD_PRODUCT_FORM_SCHEMA } from '../../../schemas';
import { StorageService } from '@3shop/domains';
import { ImageStorageClient } from '@3shop/admin-infra';
import { useNavigate } from 'react-router-dom';

type EditProductFormContainerProps = {
  product: Product;
  gates: Gate[];
};

const storage = StorageService(ImageStorageClient());

export const EditProductFormContainer = ({ product, gates }: EditProductFormContainerProps) => {
  const [storageActionLoading, setStorageActionLoading] = useState(false);
  const methods = useForm<EditProductFormValues>({
    defaultValues: {
      ...product,
      price: product.price.toString(),
      discount: product.discount?.toString(),
      poapId: product.poapId?.toString(),
      image: product.image,
    },
    resolver: yupResolver(ADD_PRODUCT_FORM_SCHEMA),
    mode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isValid, isDirty },
  } = methods;

  const navigate = useNavigate();

  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [deleteProduct, { loading: isDeleteLoading }] = useDeleteProductMutation();
  const [editProduct, { loading: isEditLoading }] = useEditProductMutation();

  const deleteProductOnClick = async () => {
    setStorageActionLoading(true);
    try {
      await storage.deletePicture(getObjectPathFromImageUrl(product.image) as string, 'products');
      setStorageActionLoading(false);

      await deleteProduct({
        variables: {
          id: product.id,
        },
        onCompleted: () => toast(getDeleteProductSuccessMessage(product.name)),
        onError: () => toast(ERROR_MESSAGE),
      });
      navigate('/app');
    } catch (e) {
      console.error(e);
    } finally {
      setStorageActionLoading(false);
    }
  };

  const onSubmit = async (data: EditProductFormValues) => {
    const variables: EditProductMutationVariables = {
      ...data,
      image: data.image as string,
      id: product.id,
      price: Number(data.price),
      discount: Number(data.discount),
      poapId: Number(data.poapId),
    };

    try {
      if (typeof data.image !== 'string') {
        setStorageActionLoading(true);

        await storage.deletePicture(product.image, 'products');
        const uploadUrl = await storage.uploadPicture(data.image, 'products');

        setStorageActionLoading(false);
        Object.assign(variables, { image: uploadUrl });
      }

      editProduct({
        variables,
        onCompleted: () => toast(getEditProductSuccessMessage(data.name)),
        onError: () => toast(ERROR_MESSAGE),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setStorageActionLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <ProductForm
        isDisabled={!isValid || !isDirty}
        onOpen={onOpen}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isLoading={storageActionLoading || isEditLoading}
        gates={gates}
      />

      <DeleteProductModal
        isOpen={isOpen}
        onClose={onClose}
        isDeleteLoading={storageActionLoading || isDeleteLoading}
        deleteProductOnClick={deleteProductOnClick}
        productName={product.name}
      />
    </FormProvider>
  );
};
