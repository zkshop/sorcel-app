import { ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { Button, Header } from "ui";

type ProductFormHeaderProps = { isLoading: boolean; onOpen?(): void };

export const ProductFormHeader = ({
  isLoading,
  onOpen,
}: ProductFormHeaderProps) => (
  <Header title={onOpen ? "Edit product" : "Add new product"}>
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
);
