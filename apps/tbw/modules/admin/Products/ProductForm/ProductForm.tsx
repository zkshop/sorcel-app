import { MainLayout } from 'ui';

import { ProductFormHeader } from './ProductFormHeader';
import { GeneralInformationsFields, MediaFields, OnChainDataFields } from './Sections';
import { AddProductFormValues } from './types';

type AddProductFormProps = {
  handleSubmit: Function;
  onSubmit(data: AddProductFormValues): Promise<void>;
  onOpen?(): void;
  isLoading: boolean;
  isDisabled: boolean;
};

export const ProductForm = ({
  handleSubmit,
  onSubmit,
  onOpen,
  isLoading,
  isDisabled,
}: AddProductFormProps) => (
  <MainLayout>
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProductFormHeader isDisabled={isDisabled} isLoading={isLoading} onOpen={onOpen} />

      <GeneralInformationsFields />

      <MediaFields />

      <OnChainDataFields />
    </form>
  </MainLayout>
);
