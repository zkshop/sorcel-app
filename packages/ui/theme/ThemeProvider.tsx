import { ChakraProvider } from '@chakra-ui/react';
import { alternativeTheme } from '.';
import { theme } from './theme';

type Props = {
  children?: React.ReactNode;
  mode: 'DEFAULT' | 'ALTERNATIVE';
};

function getThemeFromMode(mode: 'DEFAULT' | 'ALTERNATIVE') {
  const themeByMode = {
    ALTERNATIVE: alternativeTheme,
    DEFAULT: theme,
  };

  return themeByMode[mode];
}

export const ThemeProvider = ({ children, mode }: Props) => (
  <ChakraProvider resetCSS theme={getThemeFromMode(mode)} cssVarsRoot="body">
    {children}
  </ChakraProvider>
);
