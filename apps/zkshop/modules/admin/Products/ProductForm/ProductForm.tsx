import ProductFormHeader from "./ProductFormHeader";

import { GridLayout } from "components/GridLayout";
import { AddProductFormValues } from "pages/admin/product/add";
import { GeneralInformationsFields, MediaFields, OnChainDataFields } from "./Sections";

type AddProductFormProps = {
  handleSubmit: Function;
  onSubmit(data: AddProductFormValues): Promise<void>;
  onOpen?(): void;
  isLoading: boolean;
};

export function ProductForm({
  handleSubmit,
  onSubmit,
  onOpen,
  isLoading,
}: AddProductFormProps) {
  return (
    <GridLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProductFormHeader isLoading={isLoading} onOpen={onOpen} />

        <GeneralInformationsFields />

        <MediaFields />

        <OnChainDataFields />
      </form>
    </GridLayout>
  );
}
