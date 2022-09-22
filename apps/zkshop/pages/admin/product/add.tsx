import { AddProductForm } from "./../../../components/admin/Products/AddProductForm";

import { useForm } from "react-hook-form";

import { useCreateProductMutation } from "../../../libs/apollo/generated";

export type AddProductFormValues = {
  price: number;
  discount: number;
  image: string;
  curation: string;
  collection: string;
  name: string;
};

const AddProductPage = () => {
  const { handleSubmit, register } = useForm<AddProductFormValues>();
  const [createProduct] = useCreateProductMutation();

  const onSubmit = async (data: AddProductFormValues) => {
    console.log({ data });

    await createProduct({
      variables: {
        ...data,
      },
    });
  };

  return (
    <AddProductForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
    />
  );
};

export default AddProductPage;
