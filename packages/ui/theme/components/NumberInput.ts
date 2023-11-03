import { numberInputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  numberInputAnatomy.keys,
);

const baseStyle = definePartsStyle({
  field: {
    backgroundColor: 'white',
    borderRadius: 'sm',
    padding: '1rem',
    outline: 'unset',

    _placeholder: {
      color: 'greyscales.400',
    },

    _disabled: {
      backgroundColor: 'greyscales.200',
    },
  },
});

const variants = {
  default: {
    field: {
      border: '1px solid',
      borderColor: 'greyscales.200',
      _hover: {
        border: 'solid 1px',
        borderColor: 'greyscales.500',
      },
    },
  },
};

const defaultProps = {
  variant: 'default',
} as const;

export const NumberInputStyle = defineMultiStyleConfig({ baseStyle, variants, defaultProps });
