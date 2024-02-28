import { useDisclosure, useToast } from '@3shop/ui';
import { useForm, FormProvider } from 'react-hook-form';

import { DeleteProductModal } from './DeleteProductModal';
import { ProductForm } from './ProductForm';
import type { EditProductFormValues } from './types';

import type {
  EditProductMutationVariables,
  GetAdminProductsQuery,
  GetProductByIdQuery,
} from '@3shop/apollo';
import { GetAdminProductsDocument, Product_Type_Enum } from '@3shop/apollo';
import {
  useDeleteProductMutation,
  useEditProductMutation,
  useGetAdminAppQuery,
} from '@3shop/apollo';
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
import { ROUTES_PATH } from '../../../routes/Routes';

type EditProductFormContainerProps = {
  product: GetProductByIdQuery['product'];
};

const storage = StorageService(ImageStorageClient());

export const EditProductFormContainer = ({ product }: EditProductFormContainerProps) => {
  const [storageActionLoading, setStorageActionLoading] = useState(false);
  const methods = useForm<EditProductFormValues>({
    defaultValues: {
      ...product,
      price: product?.price.toString(),
      image: product?.image,
      isModal: product?.type === Product_Type_Enum.Modal,
      webhookUrl: product?.webhookUrl || '',
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

  const { data: adminData } = useGetAdminAppQuery();

  const [deleteProduct, { loading: isDeleteLoading }] = useDeleteProductMutation({
    update(cache, { data }) {
      const productsCache = cache.readQuery<GetAdminProductsQuery>({
        query: GetAdminProductsDocument,
      });

      cache.modify({
        fields: {
          // @ts-ignore
          product: () =>
            productsCache?.products.filter(
              (product: GetAdminProductsQuery['products'][0]) =>
                product.id !== data?.delete_product?.returning[0].id,
            ),
        },
      });
    },
  });
  const [editProduct, { loading: isEditLoading }] = useEditProductMutation();

  if (!product) return null;
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
      navigate(ROUTES_PATH.PROTECTED.PRODUCT);
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
      price: data.isModal ? 0 : Number(data.price),
      webhookUrl: data.isModal ? data.webhookUrl : undefined,
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
        isDisabled={
          !isValid ||
          !isDirty ||
          (!adminData?.app[0].moneyAccountId && Number(methods.getValues('price')) !== 0)
        }
        onOpen={onOpen}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isLoading={storageActionLoading || isEditLoading}
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
