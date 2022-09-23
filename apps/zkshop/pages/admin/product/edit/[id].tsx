import { GetServerSidePropsContext } from "next";
import { useForm } from "react-hook-form";

import { AddProductForm } from "../../../../components/admin/Products/AddProductForm";
import client from "../../../../libs/apollo/client";
import {
  Product,
  Product_By_PkDocument,
  useEditProductMutation,
} from "../../../../libs/apollo/generated";
import { AddProductFormValues } from "../add";

type EditProductPageProps = {
  product: Product;
};

const EditProductPage = ({ product }: EditProductPageProps) => {
  const { register, handleSubmit } = useForm<AddProductFormValues>({
    defaultValues: product,
  });

  const [editProduct, { loading }] = useEditProductMutation();

  const onSubmit = async (data: AddProductFormValues) => {
    editProduct({ variables: { ...data, id: product.id } });
  };

  return (
    <AddProductForm
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
    />
  );
};

export default EditProductPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  if (params?.id) {
    const { id } = params;
    const res = await client.query({
      query: Product_By_PkDocument,
      variables: {
        id,
      },
    });

    return {
      props: { product: res.data?.product_by_pk },
    };
  }
};
