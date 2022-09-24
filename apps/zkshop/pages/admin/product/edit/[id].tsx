import { GetServerSidePropsContext } from "next";
import { FormProvider, useForm } from "react-hook-form";

import { ProductForm } from "../../../../components/admin/Products/ProductForm";
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
  const methods = useForm<AddProductFormValues>({
    defaultValues: product,
  });
  const { handleSubmit } = methods;

  const [editProduct] = useEditProductMutation();

  const onSubmit = async (data: AddProductFormValues) => {
    editProduct({ variables: { ...data, id: product.id } });
  };

  return (
    <FormProvider {...methods}>
      <ProductForm handleSubmit={handleSubmit} onSubmit={onSubmit} />;
    </FormProvider>
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
