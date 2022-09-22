import { ChatIcon, LinkIcon, SunIcon, AtSignIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  Stack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";

import React from "react";
import { UseFormRegister } from "react-hook-form";
import { AddProductFormValues } from "../../../pages/admin/product/add";
import { GridLayout } from "../../GridLayout";
import { PRODUCTS_FIELDS } from "./constants";

type AddProductFormProps = {
  handleSubmit: Function;

  onSubmit(data: AddProductFormValues): Promise<void>;
  register: UseFormRegister<AddProductFormValues>;
};

const sx = {
  bg: "white",
  borderRadius: "8px",
  p: 8,
  border: "1px solid lightgrey",
};

export function AddProductForm({
  handleSubmit,
  onSubmit,
  register,
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
          <Stack mt={8} spacing={3} sx={sx}>
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
                  <ChatIcon />
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
                <Input
                  placeholder="Discount for holders"
                  {...register("discount")}
                />
              </InputGroup>
            </FormControl>
          </Stack>

          <Stack mt={8} spacing={3} sx={sx}>
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
          </Stack>

          <Stack mt={8} spacing={3} sx={sx}>
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

                <Input
                  placeholder="Collection Name"
                  {...register("collection")}
                />
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

                <Input
                  placeholder="Collection Address"
                  {...register("curation")}
                />
              </InputGroup>
            </FormControl>
          </Stack>
        </Box>
      </form>
    </GridLayout>
  );
}
