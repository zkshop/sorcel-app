import { GridLayout } from "components/GridLayout";
import { ProductFormHeader } from "./ProductFormHeader";
import {
  GeneralInformationsFields,
  MediaFields,
  OnChainDataFields,
} from "./Sections";
import { AddProductFormValues } from "./types";

type AddProductFormProps = {
  handleSubmit: Function;
  onSubmit(data: AddProductFormValues): Promise<void>;
  onOpen?(): void;
  isLoading: boolean;
};

export const ProductForm = ({
  handleSubmit,
  onSubmit,
  onOpen,
  isLoading,
}: AddProductFormProps) => {
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
};
