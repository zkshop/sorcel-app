import { useGetAppQuery } from '@3shop/apollo';
import { envVars } from '../envVars';
import type { DeliveryTaxesData } from '@3shop/domains';
import { useAppDispatch, useAppSelector } from '@3shop/store';
import { fetchDeliveryTaxes } from '@3shop/store/slices/deliveryTaxes';
import { useEffect } from 'react';

type ReturnType = {
  deliveryTaxesType: 'TEXT' | 'SELECT';
  loading: boolean;
  deliveryTaxesZones: DeliveryTaxesData[];
};

export const useDeliveryTaxesZones = (): ReturnType => {
  const deliveryTaxes = useAppSelector((state) => state.deliveryTaxes);
  const { loading: appDataLoading, data } = useGetAppQuery({
    variables: { appId: envVars.APP_ID },
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function () {
      if (data?.app?.deliveryTaxesTableName)
        await dispatch(fetchDeliveryTaxes(data.app.deliveryTaxesTableName));
    })();
  }, [dispatch, data?.app?.deliveryTaxesTableName]);

  return {
    deliveryTaxesType: data?.app?.deliveryTaxesTableName ? 'SELECT' : 'TEXT',
    deliveryTaxesZones: deliveryTaxes.data,
    loading: deliveryTaxes.loading || appDataLoading,
  };
};
