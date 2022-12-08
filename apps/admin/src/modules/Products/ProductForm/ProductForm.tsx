import { MainLayout } from 'ui';

import { ProductFormHeader } from './ProductFormHeader';
import { GeneralInformationsFields, MediaFields, OnChainDataFields } from './Sections';
import { AddProductFormValues } from './types';
import { GateSection } from '../GateForm';
import { Gate } from 'apollo';

type BaseProductFormProps = {
  handleSubmit: Function;
  onSubmit(data: AddProductFormValues): Promise<void>;
  isLoading: boolean;
  isDisabled: boolean;
};

type AddProductFormProps = { onOpen?: undefined; gates?: undefined } & BaseProductFormProps;
type EditProductFormProps = {
  onOpen(): void;
  gates: Gate[];
} & BaseProductFormProps;

export const ProductForm = ({
  handleSubmit,
  onSubmit,
  onOpen,
  isLoading,
  isDisabled,
  gates,
}: EditProductFormProps | AddProductFormProps) => (
  <MainLayout>
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProductFormHeader isDisabled={isDisabled} isLoading={isLoading} onOpen={onOpen} />

      <GeneralInformationsFields />

      <MediaFields />

      <OnChainDataFields />
    </form>
    {onOpen && <GateSection gates={gates} />}
  </MainLayout>
);
