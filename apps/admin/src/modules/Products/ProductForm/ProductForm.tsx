import { MainLayout } from '@3shop/ui';

import { ProductFormHeader } from './ProductFormHeader';
import { GeneralInformationsFields, MediaFields } from './Sections';
import type { AddProductFormValues } from './types';
import type { Gate } from '@3shop/apollo';

type BaseProductFormProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleSubmit: Function;
  onSubmit(data: AddProductFormValues): Promise<void>;
  isLoading: boolean;
  isDisabled: boolean;
};

type AddProductFormProps = { onOpen?: undefined } & BaseProductFormProps;
type EditProductFormProps = {
  onOpen(): void;
} & BaseProductFormProps;

export const ProductForm = ({
  handleSubmit,
  onSubmit,
  onOpen,
  isLoading,
  isDisabled,
}: EditProductFormProps | AddProductFormProps) => (
  <MainLayout>
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProductFormHeader isDisabled={isDisabled} isLoading={isLoading} onOpen={onOpen} />

      <GeneralInformationsFields />

      <MediaFields />
    </form>
  </MainLayout>
);
