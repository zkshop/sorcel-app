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

    outlined: {
      color: 'primary.main',
      border: '2px solid',
      borderColor: 'primary.main',
      backgroundColor: 'transparent',
      _hover: {
        backgroundColor: 'primary.hover',
        borderColor: 'primary.hover',
      },
      _active: {
        backgroundColor: 'primary.pressed',
        borderColor: 'primary.pressed',
      },
      _disabled: {
        backgroundColor: 'bluescales.750!important',
        pointerEvents: 'none',
        color: 'bluescales.400',
        borderColor: 'bluescales.400',
      },
    },
    negativeOutlined: {
      color: 'error.main',
      border: '2px solid',
      borderColor: 'error.main',
      backgroundColor: 'transparent',
      _hover: {
        backgroundColor: 'error.hover',
        borderColor: 'error.hover',
        color: 'white', // Text color on hover is set to white
      },
      _active: {
        backgroundColor: 'error.pressed',
        borderColor: 'error.pressed',
      },
      _disabled: {
        backgroundColor: 'bluescales.750!important',
        pointerEvents: 'none',
        color: 'bluescales.400',
        borderColor: 'bluescales.400',
      },
    },
    networkSelection: {
      backgroundColor: 'white',
      color: 'black',
      border: '2px solid',
      _hover: {
        borderColor: 'purple.200', // Border color on hover is now a lighter purple
      },
      _active: {
        borderColor: 'purple', // Border color when active
      },
      _disabled: {
        backgroundColor: 'bluescales.750!important',
        pointerEvents: 'none',
        color: 'bluescales.400',
        borderColor: 'bluescales.400',
      },
    },
    minimalist: {
      color: 'current',
      backgroundColor: 'transparent',
      width: 'auto', // Width adjusted to fit the text
      padding: "1em",
      _hover: {
        backgroundColor: 'greyscales.100',
      },
      _active: {
        backgroundColor: 'transparent',
      },
      _disabled: {
        color: 'bluescales.400',
      },
    },
  },

  defaultProps: {
    size: 'large',
    variant: 'primary',
  },
};
