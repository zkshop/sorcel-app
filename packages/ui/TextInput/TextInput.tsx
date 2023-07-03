import type { InputProps } from '@chakra-ui/react';
import { Box, FormLabel, Input } from '@chakra-ui/react';
import type { UseFormRegister } from 'react-hook-form';

type TextInputProps = InputProps & {
  name: string;
  label: string;
  register: UseFormRegister<any>;
};

export const TextInput = ({ name, label, register, ...rest }: TextInputProps) => (
  <Box w="full">
    <FormLabel htmlFor={name} textAlign="left">
      {label}
    </FormLabel>
    <Input type="text" {...rest} {...register(name)} />
  </Box>
);

export default TextInput;
