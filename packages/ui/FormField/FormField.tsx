import { Box, FormLabel, Input } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";

type FormFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  register?: UseFormRegister<any>;
  maxWidth?: string | number;
};

export const FormField = ({
  label,
  name,
  placeholder,
  register,
  maxWidth,
}: FormFieldProps) => (
  <Box>
    <FormLabel>{label}</FormLabel>
    <Input
      maxWidth={maxWidth}
      type="text"
      placeholder={placeholder}
      {...register?.(name)}
    />
  </Box>
);
