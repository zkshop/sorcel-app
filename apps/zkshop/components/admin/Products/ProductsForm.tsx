import { Box, Button, Heading } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import ProductsFormFields from "./ProductsFormFields";

type ProductsFormValues = {};

const ProductsForm = () => {
  const { handleSubmit, register } = useForm<ProductsFormValues>();

  const onSubmit = (data: ProductsFormValues) => {
    console.log(data);
  };

  return (
    <Box>
      <Heading as="h3">Products</Heading>
      <Box my={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProductsFormFields register={register} />
          <Button type="submit" mt={2}>
            Update
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ProductsForm;
