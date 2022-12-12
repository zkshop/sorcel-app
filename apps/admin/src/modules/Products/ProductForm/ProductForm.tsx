import { MainLayout } from 'ui';

import { ProductFormHeader } from './ProductFormHeader';
import { GeneralInformationsFields, MediaFields, OnChainDataFields } from './Sections';
import type { AddProductFormValues } from './types';
import { GateSection } from '../GateForm';
import type { Gate } from 'apollo';

type BaseProductFormProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
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
