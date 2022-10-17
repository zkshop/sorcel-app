import { useToast } from '@chakra-ui/react';
import { useCreateProductMutation } from 'apollo';
import axios from 'axios';
import { getAddProductSuccessMessage } from 'libs/messages';
import { useRouter } from 'next/router';
import { toNumber } from 'pure';
import { useForm, FormProvider } from 'react-hook-form';

import { ProductForm } from './ProductForm';
import { AddProductFormValues } from './types';

export const AddProductFormContainer = () => {
  const methods = useForm<AddProductFormValues>({
    defaultValues: {},
  });
  const { handleSubmit } = methods;

  const router = useRouter();

  const [createProduct, { loading: isLoading }] = useCreateProductMutation();

  const toast = useToast();

  const onSubmit = async (data: AddProductFormValues) => {
    try {
      const {
        data: { uploadUrl },
      } = await axios.post('/api/image/store', { url: data.image, bucketName: 'products' });

      await createProduct({
        variables: {
          ...data,
          appId: process.env.APP_ID,
          price: toNumber(data.price),
          discount: toNumber(data.discount),
          poapId: toNumber(data.poapId),
          image: uploadUrl,
        },
        onCompleted: () => toast(getAddProductSuccessMessage(data.name)),
      });

      router.push('/admin');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormProvider {...methods}>
      <ProductForm isLoading={isLoading} handleSubmit={handleSubmit} onSubmit={onSubmit} />
    </FormProvider>
  );
};
