import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

type ButtonProps = {
  children: React.ReactNode;
} & ChakraButtonProps;

export const Button = ({ children, ...props }: ButtonProps) => (
  <ChakraButton {...props} bg="white" borderRadius="6px" boxShadow="1px 4px 4px rgb(0 0 0 / 25%)">
    {children}
  </ChakraButton>
);
