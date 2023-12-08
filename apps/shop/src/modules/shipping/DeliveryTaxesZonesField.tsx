import { useGetDeliveryZoneByAppIdQuery } from '@3shop/apollo';
import { envVars } from '@3shop/config';
import { Spinner, Input, Select } from '@3shop/ui';
import join from 'lodash/join';
import { useFormContext } from 'react-hook-form';
import { SHIPPING_FIELDS } from './constants';
import type { ShippingFormValues } from './ShippingForm';

export const DeliveryTaxesZonesField = () => {
  const { register } = useFormContext<ShippingFormValues>();

  const { data, loading } = useGetDeliveryZoneByAppIdQuery({
    variables: {
      _eq: envVars.APP_ID,
    },
  });

  if (loading) return <Spinner />;
  if (!data) return <>Error</>;

  if (data.delivery_zone.length === 0) {
    return <Input type="text" {...register(SHIPPING_FIELDS.country.name)} placeholder="Country" />;
  }

  return (
    <Select {...register(SHIPPING_FIELDS.country.name)} placeholder="Delivery Zone...">
      {data.delivery_zone.map((zone) => (
        <option value={zone.name}>
          {zone.name} ({join(zone.countries, ', ')})
        </option>
      ))}
    </Select>
  );
};
