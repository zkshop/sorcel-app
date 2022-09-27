import { FormProvider, useForm } from "react-hook-form";

import { useCreateProductMutation } from "libs/apollo/generated";
import { ProductForm } from "modules/admin/Products/ProductForm";

export type AddProductFormValues = {
  price: number;
  discount: number;
  image: string;
  curation: string;
  collection: string;
  name: string;
};

const AddProductPage = () => {
  const methods = useForm<AddProductFormValues>();
  const { handleSubmit } = methods;

  const [createProduct] = useCreateProductMutation();

  const onSubmit = async (data: AddProductFormValues) => {
    await createProduct({
      variables: {
        ...data,
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <ProductForm handleSubmit={handleSubmit} onSubmit={onSubmit} />;
    </FormProvider>
  );
};

export default AddProductPage;
