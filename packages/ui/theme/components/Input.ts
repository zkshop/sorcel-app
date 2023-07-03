import type { ComponentStyleConfig } from '@chakra-ui/react';

export const InputStyle: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'sm',
    border: '1px solid greyscales.200',
    background: 'white',
    borderColor: '#E5E5E5',
    color: 'greyscales.900',
    padding: '1rem',
    outline: 'unset',

    _placeholder: {
      color: 'greyscales.400',
    },

    _disabled: {
      backgroundColor: 'greyscales.200',
    },
  },
};
