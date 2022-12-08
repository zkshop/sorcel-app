import { Box as ChakraBox, BoxProps as ChakraBoxProps } from '@chakra-ui/react';

type BoxProps = ChakraBoxProps;

export const Box = ({ children, ...props }: BoxProps) => (
  <ChakraBox {...props}>{children}</ChakraBox>
);
