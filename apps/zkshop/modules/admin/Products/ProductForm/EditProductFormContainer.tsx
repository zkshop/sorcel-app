import { useDisclosure, useToast } from 'ui';
import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';

import { DeleteProductModal } from './DeleteProductModal';
import { ProductForm } from './ProductForm';
import { AddProductFormValues } from './types';

import { Gate, Product, useDeleteProductMutation, useEditProductMutation } from 'apollo';
import {
  ERROR_MESSAGE,
  getDeleteProductSuccessMessage,
  getEditProductSuccessMessage,
} from 'libs/messages';
import { getObjectPathFromImageUrl, toNumber } from 'pure';
import axios from 'axios';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { ADD_PRODUCT_FORM_SCHEMA } from 'libs/schemas';

type EditProductFormContainerProps = {
  product: Product;
  gates: Gate[];
};

export const EditProductFormContainer = ({ product, gates }: EditProductFormContainerProps) => {
  const [storageActionLoading, setStorageActionLoading] = useState(false);
  const methods = useForm<AddProductFormValues>({
    defaultValues: {
      ...product,
      price: product.price.toString(),
      discount: product.discount?.toString(),
      poapId: product.poapId?.toString(),
      description: product.description || '',
      isDiscountGated: product.isDiscountGated,
    },
    resolver: yupResolver(ADD_PRODUCT_FORM_SCHEMA),
    mode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isValid, isDirty },
  } = methods;

  const router = useRouter();

  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [deleteProduct, { loading: isDeleteLoading }] = useDeleteProductMutation();
  const [editProduct, { loading: isEditLoading }] = useEditProductMutation();

  const deleteProductOnClick = async () => {
    setStorageActionLoading(true);
    try {
      await axios.delete(
        `/api/image/delete?url=${getObjectPathFromImageUrl(product.image)}&bucketName=products`,
      );
      setStorageActionLoading(false);

      await deleteProduct({
        variables: {
          id: product.id,
        },
        onCompleted: () => toast(getDeleteProductSuccessMessage(product.name)),
        onError: () => toast(ERROR_MESSAGE),
      });
      router.push('/admin');
    } catch (e) {
      console.error(e);
    } finally {
      setStorageActionLoading(false);
    }
  };

  const onSubmit = async (data: AddProductFormValues) => {
    const variables = {
      ...data,
      id: product.id,
      price: toNumber(data.price),
      discount: toNumber(data.discount),
      poapId: toNumber(data.poapId),
    };

    try {
      if (data.image !== product.image) {
        setStorageActionLoading(true);
        const {
          data: { uploadUrl },
        } = await axios.post('/api/image/update', {
          newImageUrl: data.image,
          path: product.image,
          bucketName: 'products',
        });

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
