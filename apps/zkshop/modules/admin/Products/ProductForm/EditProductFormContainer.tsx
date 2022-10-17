import { useDisclosure, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';

import { DeleteProductModal } from './DeleteProductModal';
import { ProductForm } from './ProductForm';
import { AddProductFormValues } from './types';

import { Product, useDeleteProductMutation, useEditProductMutation } from 'apollo';
import {
  ERROR_MESSAGE,
  getDeleteProductSuccessMessage,
  getEditProductSuccessMessage,
} from 'libs/messages';
import { getObjectPathFromImageUrl, toNumber } from 'pure';
import axios from 'axios';

type EditProductFormContainerProps = {
  product: Product;
};

export const EditProductFormContainer = ({ product }: EditProductFormContainerProps) => {
  const methods = useForm<AddProductFormValues>({
    defaultValues: {
      ...product,
      price: product?.price.toString(),
      discount: product.discount?.toString(),
      poapId: product.poapId?.toString(),
    },
  });

  const { handleSubmit } = methods;

  const router = useRouter();

  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [deleteProduct, { loading: isDeleteLoading }] = useDeleteProductMutation();
  const [editProduct, { loading: isEditLoading }] = useEditProductMutation();

  const deleteProductOnClick = async () => {
    try {
      await axios.delete(`/api/image/delete?url=${getObjectPathFromImageUrl(product.image)}`);

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

    if (data.image !== product.image) {
      const {
        data: { uploadUrl },
      } = await axios.post('/api/image/update', {
        newImageUrl: data.image,
        path: product.image,
      });

      Object.assign(variables, { image: uploadUrl });
    }

    editProduct({
      variables,
      onCompleted: () => toast(getEditProductSuccessMessage(data.name)),
      onError: () => toast(ERROR_MESSAGE),
    });
  };

  return (
    <FormProvider {...methods}>
      <ProductForm
        onOpen={onOpen}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isLoading={isEditLoading}
      />

      <DeleteProductModal
        isOpen={isOpen}
        onClose={onClose}
        isDeleteLoading={isDeleteLoading}
        deleteProductOnClick={deleteProductOnClick}
        productName={product.name}
      />
    </FormProvider>
  );
};
