import { useToast } from '@3shop/ui';
import { getAddProductSuccessMessage } from '@3shop/messages';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductForm } from './ProductForm';
import type { AddProductFormValues } from './types';
import { ADD_PRODUCT_FORM_SCHEMA } from '../../../schemas';
import { StorageService } from '@3shop/domains';
import { ImageStorageClient } from '@3shop/admin-infra';
import { useNavigate } from 'react-router-dom';
import { Product_Type_Enum, useCreateAdminProductMutation } from '@3shop/apollo';

const storage = StorageService(ImageStorageClient());

export const AddProductFormContainer = () => {
  const [storageActionLoading, setStorageActionLoading] = useState(false);
  const methods = useForm<AddProductFormValues>({
    defaultValues: {},
    resolver: yupResolver(ADD_PRODUCT_FORM_SCHEMA),
    mode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const navigate = useNavigate();

  const [createProduct, { loading: isLoading }] = useCreateAdminProductMutation();

  const toast = useToast();

  const onSubmit = async (data: AddProductFormValues) => {
    try {
      setStorageActionLoading(true);

      const uploadUrl = await storage.uploadPicture(data.image, 'products');

      setStorageActionLoading(false);

      await createProduct({
        variables: {
          ...data,
          image: uploadUrl,
          price: Number(data.price),
          type: data.isModal ? Product_Type_Enum.Modal : Product_Type_Enum.Commerce,
        },
        onCompleted: () => toast(getAddProductSuccessMessage(data.name)),
      });

      navigate('/app');
    } catch (e) {
      console.error(e);
    } finally {
      setStorageActionLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <ProductForm
        isDisabled={!isValid}
        isLoading={storageActionLoading || isLoading}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </FormProvider>
  );
};
