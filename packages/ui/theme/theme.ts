import { extendTheme } from '@chakra-ui/react';

import { borderRadius } from './foundations/borderRadius';
import { breakpoints } from './foundations/breakpoints';
import { colors } from './foundations/colors';
import { styles } from './styles';

export const theme = extendTheme({
  ...breakpoints,
  ...borderRadius,
  ...colors,
  ...styles,
  ...colors,
});
