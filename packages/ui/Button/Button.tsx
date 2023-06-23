import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { Button as ChakraButton } from '@chakra-ui/react';

type ButtonProps = {
  children: React.ReactNode;
} & ChakraButtonProps;

export const Button = ({ children, ...props }: ButtonProps) => (
  <ChakraButton {...props}>{children}</ChakraButton>
);
