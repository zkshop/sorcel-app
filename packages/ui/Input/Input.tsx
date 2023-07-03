import type { InputProps } from '@chakra-ui/react';
import { Input as ChakraInput } from '@chakra-ui/react';

type Props = InputProps;

export const Input = (props: Props) => <ChakraInput {...props} borderColor="greyscales.200" />;
