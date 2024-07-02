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
import { useGetAdminAppQuery } from '@3shop/apollo';
import { ROUTES_PATH } from '../../../routes/Routes';
import { product as productApi } from '../../../api/product/product';
import { useApi } from '../../../hooks/useApi';

const storage = StorageService(ImageStorageClient());

export const AddProductFormContainer = () => {
  const [storageActionLoading, setStorageActionLoading] = useState(false);
  const [ready, product] = useApi(() => new productApi());

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

  const { data: adminData } = useGetAdminAppQuery();

  const toast = useToast();

  const onSubmit = async (data: AddProductFormValues) => {
    try {
      console.log('!submit data', data);
      const price = (() => {
        if (data.isModal || data.currency != 'euro') return 0;
        return Number(data.price);
      })();
      const crypto_price = (() => {
        if (data.currency == 'euro') return null;
        return JSON.stringify({
          currency: data.currency,
          value: String(data.price),
        });
      })();
      if (crypto_price && !adminData?.app[0].xrpWallet) {
        toast({
          status: 'error',
          title: 'Xrp wallet not linked',
          description: 'To use Xrp currency, please link your wallet under the payment section',
        });
        return;
      }
      setStorageActionLoading(true);

      const uploadUrl = await storage.uploadPicture(data.image, 'products');

      setStorageActionLoading(false);
      await product?.create({
        ...data,
        image: uploadUrl,
        price,
        crypto_price,
        isModal: data.isModal,
      });
      toast(getAddProductSuccessMessage(data.name));

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
        isLoading={storageActionLoading || !ready}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </FormProvider>
  );
};
