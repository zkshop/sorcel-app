import { useGetAdminProductsQuery } from '@3shop/apollo';
import { Select, Spinner } from '@3shop/ui';
import type { UseFormRegister } from 'react-hook-form';
import type { AddGateFormValues } from './AddGate';

type ProductSelectFieldProps = {
  register: UseFormRegister<AddGateFormValues>;
};

export const ProductSelectField = ({ register }: ProductSelectFieldProps) => {
  const { data, loading } = useGetAdminProductsQuery();

  if (loading) return <Spinner />;

  if (!data) return <>Error</>;

  return (
    <Select mt={2} {...register('product_id')}>
      {data.products.map((product) => (
        <option key={product.id} value={product.id}>
          {product.name}
        </option>
      ))}
    </Select>
  );
};
