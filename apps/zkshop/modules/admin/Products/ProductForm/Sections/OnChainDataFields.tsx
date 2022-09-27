import { SunIcon, AtSignIcon } from "@chakra-ui/icons";
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

import { Section } from "components/Section";

export const OnChainDataFields = () => {
  const { register } = useFormContext();

  return (
    <Section>
      <Heading fontSize="xl"> On-Chain Data </Heading>

      <FormControl>
        <FormLabel> Collection Name </FormLabel>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <SunIcon />
          </InputLeftElement>

          <Input placeholder="Collection Name" {...register("collection")} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel> Collection Address </FormLabel>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <AtSignIcon />
          </InputLeftElement>

          <Input placeholder="Collection Address" {...register("curation")} />
        </InputGroup>
      </FormControl>
    </Section>
  );
};
