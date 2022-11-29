import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import { styles } from './styles';

export const theme = extendTheme({
  ...breakpoints,
  ...styles,
});
