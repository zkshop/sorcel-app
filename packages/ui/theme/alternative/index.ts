import { extendTheme } from '@chakra-ui/react';
import { borderRadius } from '../foundations/borderRadius';
import { breakpoints } from '../foundations/breakpoints';
import { styles } from './styles';
import { colors } from './colors';

export const alternativeTheme = extendTheme({
  ...breakpoints,
  ...borderRadius,
  ...colors,
  styles,
  shadows: {
    base: '1px 4px 4px rgb(0 0 0 / 25%)',
  },
});
