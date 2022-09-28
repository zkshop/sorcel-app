import { Box, FormLabel, Input } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";

type TextInputProps = {
  name: string;
  label: string;
  register: UseFormRegister<any>;
};

export const TextInput = ({ name, label, register }: TextInputProps) => (
  <Box w="full">
    <FormLabel textAlign="left">{label}</FormLabel>
    <Input type="text" {...register(name)} />
  </Box>
);

export default TextInput;
