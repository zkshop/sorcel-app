import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { UseFormRegister } from "react-hook-form";

import { PRODUCTS_FIELDS } from "./constants";

import FormField from "components/FormField";

type ProductFormFieldProps = {
  register: UseFormRegister<any>;
};

const ProductsFormFields = ({ register }: ProductFormFieldProps) => (
  <Grid templateColumns="repeat(3, 1fr)" gap={4} my={2}>
    <GridItem>
      <FormField register={register} {...PRODUCTS_FIELDS.name} />
      <FormField register={register} {...PRODUCTS_FIELDS.image} />
    </GridItem>
    <GridItem>
      <FormField register={register} {...PRODUCTS_FIELDS.price} />
      <FormField register={register} {...PRODUCTS_FIELDS.discount} />
    </GridItem>
    <GridItem>
      <FormField register={register} {...PRODUCTS_FIELDS.curation} />
      <FormField register={register} {...PRODUCTS_FIELDS.collection} />
    </GridItem>
  </Grid>
);

export default ProductsFormFields;
