import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

type ButtonProps = {
  children: React.ReactNode;
} & ChakraButtonProps;

export const Button = ({ children, ...props }: ButtonProps) => (
  <ChakraButton colorScheme="messenger" {...props}>
    {children}
  </ChakraButton>
);
