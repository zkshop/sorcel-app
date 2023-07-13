import { forwardRef } from 'react';
import type { InputProps } from '@chakra-ui/react';
import { Input as ChakraInput } from '@chakra-ui/react';

type Props = InputProps;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <ChakraInput ref={ref} {...props} borderColor="greyscales.200" />
));

Input.displayName = 'Input';
