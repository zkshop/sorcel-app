import type { BoxProps as ChakraBoxProps } from '@chakra-ui/react';
import { Box as ChakraBox } from '@chakra-ui/react';

type BoxProps = ChakraBoxProps;

export const Box = ({ children, ...props }: BoxProps) => (
  <ChakraBox {...props}>{children}</ChakraBox>
);
