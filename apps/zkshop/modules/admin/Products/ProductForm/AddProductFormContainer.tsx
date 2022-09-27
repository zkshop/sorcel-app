import { useCreateProductMutation } from "libs/apollo/generated";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { ProductForm } from "./ProductForm";
import { AddProductFormValues } from "./types";

export const AddProductFormContainer = () => {
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
