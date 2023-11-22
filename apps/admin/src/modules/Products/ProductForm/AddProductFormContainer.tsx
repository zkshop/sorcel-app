import { useToast } from '@3shop/ui';
import { getAddProductSuccessMessage } from '@3shop/messages';
import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductForm } from './ProductForm';
import type { AddProductFormValues } from './types';
import { ADD_PRODUCT_FORM_SCHEMA } from '../../../schemas';
import { StorageService } from '@3shop/domains';
import { ImageStorageClient } from '@3shop/admin-infra';
import { useNavigate } from 'react-router-dom';
import type { GetAdminProductsQuery } from '@3shop/apollo';
import {
  GetAdminProductsDocument,
  Product_Type_Enum,
  useCreateAdminProductMutation,
} from '@3shop/apollo';
import { ROUTES_PATH } from '../../../routes/Routes';

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
    watch,
  } = methods;

  const isModalValue = watch('isModal');

  useEffect(() => {
    if (isModalValue) {
      methods.setValue('price', '0');
    }
  }, [isModalValue]);

  const navigate = useNavigate();

  const [createProduct, { loading: isLoading }] = useCreateAdminProductMutation({
    update(cache, { data }) {
      const productsCache = cache.readQuery<GetAdminProductsQuery>({
        query: GetAdminProductsDocument,
      });

      console.log({ productsCache, data });

      cache.modify({
        fields: {
          product: () => [
            ...(productsCache ? productsCache.products : []),
            data?.insert_product_one,
          ],
        },
      });
    },
  });

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
          price: data.isModal ? 0 : Number(data.price),
          type: data.isModal ? Product_Type_Enum.Modal : Product_Type_Enum.Commerce,
        },
        onCompleted: () => toast(getAddProductSuccessMessage(data.name)),
      });

      navigate(ROUTES_PATH.PROTECTED.PRODUCT);
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
