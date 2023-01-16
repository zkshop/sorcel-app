import { useDeliveryTaxesZones } from '@/hooks/useDeliveryTaxesZones';
import { Spinner } from '@3shop/ui/Spinner';
import { Input, Select } from '@chakra-ui/react';
import join from 'lodash/join';
import { useFormContext } from 'react-hook-form';
import { SHIPPING_FIELDS } from './constants';
import type { ShippingFormValues } from './ShippingForm';

export const DeliveryTaxesZonesField = () => {
  const { register } = useFormContext<ShippingFormValues>();

  const { loading, deliveryTaxesZones, deliveryTaxesType } = useDeliveryTaxesZones();

  if (loading) return <Spinner />;

  if (deliveryTaxesType === 'TEXT') {
    return <Input type="text" {...register(SHIPPING_FIELDS.country.name)} placeholder="Country" />;
  }

  return (
    <Select {...register(SHIPPING_FIELDS.country.name)} placeholder="Delivery Zone...">
      {deliveryTaxesZones.map((zone) => (
        <option value={zone.name}>
          {zone.name} ({join(zone.countries, ', ')})
        </option>
      ))}
    </Select>
  );
};
