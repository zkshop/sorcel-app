import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";

import { DeleteProductModal } from "./DeleteProductModal";
import { ProductForm } from "./ProductForm";
import { AddProductFormValues } from "./types";

import {
  Product,
  useDeleteProductMutation,
  useEditProductMutation,
} from "libs/apollo/generated";

type EditProductFormContainerProps = {
  product: Product;
};

export const EditProductFormContainer = ({
  product,
}: EditProductFormContainerProps) => {
  const methods = useForm<AddProductFormValues>({
    defaultValues: product,
  });
  const { handleSubmit } = methods;

  const router = useRouter();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [deleteProduct, { loading: isDeleteLoading }] =
    useDeleteProductMutation();
  const [editProduct, { loading: isEditLoading }] = useEditProductMutation();

  const deleteProductOnClick = async () => {
    try {
      await deleteProduct({
        variables: {
          id: product.id,
        },
      });
      router.push("/admin");
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = async (data: AddProductFormValues) => {
    editProduct({ variables: { ...data, id: product.id } });
  };

  return (
    <FormProvider {...methods}>
      <ProductForm
        onOpen={onOpen}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isLoading={isEditLoading}
      />

      <DeleteProductModal
        isOpen={isOpen}
        onClose={onClose}
        isDeleteLoading={isDeleteLoading}
        deleteProductOnClick={deleteProductOnClick}
        productName={product.name}
      />
    </FormProvider>
  );
};
