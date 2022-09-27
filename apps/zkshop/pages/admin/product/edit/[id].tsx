import {
  ButtonGroup,
  Modal,
  useDisclosure,
  Button,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

import { ProductForm } from "../../../../components/admin/Products/ProductForm";
import {
  addApolloState,
  initializeApollo,
} from "../../../../libs/apollo/client";
import {
  Product,
  Product_By_PkDocument,
  useDeleteProductMutation,
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
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [deleteProduct, { loading }] = useDeleteProductMutation();
  const { handleSubmit } = methods;

  const [editProduct] = useEditProductMutation();

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
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete a product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <span>Do you want to delete {product.name} ?</span>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              No
            </Button>
            <Button
              onClick={deleteProductOnClick}
              backgroundColor="red"
              color="white"
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};

export default EditProductPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const apolloClient = initializeApollo();
  const { params } = context;

  if (params?.id) {
    const { id } = params;
    const res = await apolloClient.query({
      query: Product_By_PkDocument,
      variables: {
        id,
      },
    });

    return addApolloState(apolloClient, {
      props: { product: res.data?.product_by_pk },
    });
  }
};
