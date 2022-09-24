import { Heading, HStack, Button, Box } from "@chakra-ui/react";
import React from "react";

import { AddProductFormValues } from "../../../../pages/admin/product/add";
import { GridLayout } from "../../../GridLayout";

import { GeneralInformationsField } from "./GeneralInformationsField";
import { MediaFields } from "./MediaFields";
import { OnChainDataFields } from "./OnChainDataFields";

type AddProductFormProps = {
  handleSubmit: Function;
  onSubmit(data: AddProductFormValues): Promise<void>;
};

export function ProductForm({
  handleSubmit,
  onSubmit,
}: AddProductFormProps) {
  return (
    <GridLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Heading as="h2">
            <HStack justifyContent="space-between">
              <span>Add new product</span>
              <Button type="submit">Save</Button>
            </HStack>
          </Heading>
        </Box>

        <Box>
          <GeneralInformationsField />

          <MediaFields />

          <OnChainDataFields />
        </Box>
      </form> 
    </GridLayout>
  );
}
