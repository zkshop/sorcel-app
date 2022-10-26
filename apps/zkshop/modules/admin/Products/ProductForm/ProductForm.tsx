import { useFormContext } from 'react-hook-form';
import { MainLayout } from 'ui';

import { ProductFormHeader } from './ProductFormHeader';
import { GeneralInformationsFields, MediaFields, OnChainDataFields } from './Sections';
import { AddProductFormValues } from './types';

type AddProductFormProps = {
  onSubmit(data: AddProductFormValues): Promise<void>;
  onOpen?(): void;
  isLoading: boolean;
};

export const ProductForm = ({ onSubmit, onOpen, isLoading }: AddProductFormProps) => {
  const {
    handleSubmit,
    formState: { isValid },
  } = useFormContext<AddProductFormValues>();

  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProductFormHeader isDisabled={!isValid} isLoading={isLoading} onOpen={onOpen} />

        <GeneralInformationsFields />

        <MediaFields />

        <OnChainDataFields />
      </form>
    </MainLayout>
  );
};
