import type { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const ButtonStyle: ComponentStyleConfig = {
  baseStyle: {
    w: '200px',
    color: 'white',
    backgroundColor: '#6C50F4',
  },

  sizes: {
    large: {
      h: '56px',
    },
    small: {
      h: '48px',
    },
    xsmall: {
      h: '48px',
      w: '140px',
      fontsize: 'small',
    },
  },

  variants: {
    primary: {
      backgroundColor: 'primary.main',
      _hover: {
        backgroundColor: 'primary.hover',
      },
      _active: {
        backgroundColor: 'primary.pressed',
      },
      _disabled: {
        backgroundColor: 'bluescales.750!important',
        pointerEvents: 'none',
        color: 'bluescales.400',
      },
    },

    secondary: {
      color: mode('white', 'black'),
      backgroundColor: mode('black', 'white'),
      _hover: {
        backgroundColor: 'greyscales.750',
      },
      _active: {
        backgroundColor: 'greyscales.500',
      },
    },

    negative: {
      color: 'white',
      backgroundColor: 'error.main',
      _hover: {
        backgroundColor: 'error.hover',
      },
      _active: {
        backgroundColor: 'error.pressed',
      },
    },
  },

  defaultProps: {
    size: 'large',
    variant: 'primary',
  },
};
