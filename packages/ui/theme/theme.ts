import type { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { borderRadius } from './foundations/borderRadius';
import { breakpoints } from './foundations/breakpoints';
import { colors } from './foundations/colors';
import { styles } from './styles';

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
  cssVarPrefix: 'chakra',
};

export const theme = extendTheme({
  ...breakpoints,
  ...borderRadius,
  ...colors,
  ...styles,
  shadows: {
    base: '1px 4px 4px rgb(0 0 0 / 25%)',
  },
  config,
});

export type Theme = typeof theme;
