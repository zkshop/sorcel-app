import { LinkIcon } from "@chakra-ui/icons";
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
import { Section } from "ui";

export const MediaFields = () => {
  const { register } = useFormContext();
  return (
    <Section>
      <Heading fontSize="xl"> Media </Heading>

      <FormControl>
        <FormLabel mb={1}> Url </FormLabel>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <LinkIcon />
          </InputLeftElement>

          <Input placeholder="Image link" {...register("image")} />
        </InputGroup>
      </FormControl>
    </Section>
  );
};
