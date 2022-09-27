import { ButtonGroup, Button } from "@chakra-ui/react";
import Header from "components/Header";
import React from "react";

type ProductFormHeaderProps = { isLoading: boolean; onOpen?(): void };

const ProductFormHeader = ({ isLoading, onOpen }: ProductFormHeaderProps) => {
  return (
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
};

export default ProductFormHeader;
