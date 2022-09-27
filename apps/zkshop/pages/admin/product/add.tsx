import { FormProvider, useForm } from "react-hook-form";

import { useCreateProductMutation } from "libs/apollo/generated";
import { ProductForm } from "modules/admin/Products/ProductForm";
import { useRouter } from "next/router";

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

  const router = useRouter();

  const [createProduct, { loading: isLoading }] = useCreateProductMutation();

  const onSubmit = async (data: AddProductFormValues) => {
    try {
      await createProduct({
        variables: {
          ...data,
        },
      });

      router.push("/admin");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormProvider {...methods}>
      <ProductForm
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </FormProvider>
  );
};

export default AddProductPage;
