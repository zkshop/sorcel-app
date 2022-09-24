import { Heading, HStack, Button, Box, ButtonGroup } from "@chakra-ui/react";
import React from "react";

import { AddProductFormValues } from "../../../../pages/admin/product/add";
import { GridLayout } from "../../../GridLayout";
import Header from "../../../Header";

import { GeneralInformationsField } from "./GeneralInformationsField";
import { MediaFields } from "./MediaFields";
import { OnChainDataFields } from "./OnChainDataFields";

type AddProductFormProps = {
  handleSubmit: Function;
  onSubmit(data: AddProductFormValues): Promise<void>;
  onOpen?(): void;
};

export function ProductForm({
  handleSubmit,
  onSubmit,
  onOpen,
}: AddProductFormProps) {
  return (
    <GridLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header title="Add new product">
          <ButtonGroup>
            <Button type="submit">Save</Button>
            {onOpen && (
              <Button
                onClick={onOpen}
                type="button"
                backgroundColor="red"
                color="white"
              >
                Delete
              </Button>
            )}
          </ButtonGroup>
        </Header>

        <Box>
          <GeneralInformationsField />

          <MediaFields />

          <OnChainDataFields />
        </Box>
      </form>
    </GridLayout>
  );
}
