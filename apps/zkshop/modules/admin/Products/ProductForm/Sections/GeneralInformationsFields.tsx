import {
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { BsChatRightText } from "react-icons/bs";
import { Section } from "ui";

import { PRODUCTS_FIELDS } from "../../constants";

export const GeneralInformationsFields = () => {
  const { register } = useFormContext();

  return (
    <Section>
      <Heading fontSize="xl"> General Information </Heading>

      <FormControl>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.name.label}</FormLabel>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            -
          </InputLeftElement>
          <Input placeholder="Name" {...register("name")} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel mb={1}>Description</FormLabel>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <BsChatRightText />
          </InputLeftElement>

          <Input placeholder="Description" />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.price.label}</FormLabel>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            $
          </InputLeftElement>

          <Input placeholder="Price" {...register("price")} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel mb={1}>Discount for holders</FormLabel>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            %
          </InputLeftElement>

          <Input placeholder="Discount for holders" {...register("discount")} />
        </InputGroup>
      </FormControl>
    </Section>
  );
};
