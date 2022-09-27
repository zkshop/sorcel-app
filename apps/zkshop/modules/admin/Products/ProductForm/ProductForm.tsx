import { Button, Box, ButtonGroup } from "@chakra-ui/react";
import React from "react";

import { GeneralInformationsField } from "./Sections/GeneralInformationsField";
import { MediaFields } from "./Sections/MediaFields";
import { OnChainDataFields } from "./Sections/OnChainDataFields";

import { GridLayout } from "components/GridLayout";
import Header from "components/Header";
import { AddProductFormValues } from "pages/admin/product/add";

type AddProductFormProps = {
  handleSubmit: Function;
  onSubmit(data: AddProductFormValues): Promise<void>;
  onOpen?(): void;
  isLoading: boolean;
};

export function ProductForm({
  handleSubmit,
  onSubmit,
  onOpen,
  isLoading,
}: AddProductFormProps) {
  return (
    <GridLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header title="Add new product">
          <ButtonGroup>
            <Button isLoading={isLoading} type="submit">
              Save
            </Button>
            {onOpen && (
              <Button
                onClick={onOpen}
                type="button"
                backgroundColor="red"
                color="white"
                isDisabled={isLoading}
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
