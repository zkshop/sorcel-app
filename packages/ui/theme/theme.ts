import type { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { borderRadius } from './foundations/borderRadius';
import { breakpoints } from './foundations/breakpoints';
import { colors } from './foundations/colors';
import { styles } from './styles';
import { components } from './components';

const config: ThemeConfig = {};

export const theme = extendTheme({
  colors,
  ...breakpoints,
  ...borderRadius,
  ...styles,
  components,
  config,
});
