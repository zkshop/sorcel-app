import { ChakraProvider } from '@chakra-ui/react';
import { themes } from '.';

type Props = {
  children?: React.ReactNode;
  themeToApply: 'vanilla' | 'first';
};

export const ThemeProvider = ({ children, themeToApply }: Props) => (
  <ChakraProvider resetCSS theme={themes[themeToApply]}>
    {children}
  </ChakraProvider>
);
