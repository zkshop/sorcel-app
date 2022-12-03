import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => (
  <ChakraProvider resetCSS theme={theme} cssVarsRoot="body">
    {children}
  </ChakraProvider>
);
