import { BackButton, MainLayout } from '@3shop/ui';
import type { UseFormHandleSubmit } from 'react-hook-form';

import { ProductFormHeader } from './ProductFormHeader';
import { GeneralInformationsFields, MediaFields } from './Sections';
import type { AddProductFormValues, EditProductFormValues } from './types';

type BaseProductFormProps = {
  handleSubmit: UseFormHandleSubmit<AddProductFormValues | EditProductFormValues>;
  onSubmit(data: AddProductFormValues | EditProductFormValues): Promise<void>;
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
      <BackButton href="/app" />
      <GeneralInformationsFields />

      <MediaFields />
    </form>
  </MainLayout>
);
