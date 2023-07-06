import type { ComponentStyleConfig } from '@chakra-ui/react';

export const InputStyle: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'sm',
    padding: '1rem',
    outline: 'unset',

    _placeholder: {
      color: 'greyscales.400',
    },

    _disabled: {
      backgroundColor: 'greyscales.200',
    },

    variants: {
      default: {
        field: {
          border: '1px solid',
          borderColor: '#E5E5E5',
        },
      },
    },

    defaultProps: {
      variant: 'default',
    },
  },
};
