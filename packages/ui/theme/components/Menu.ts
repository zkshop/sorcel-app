import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  menuAnatomy.keys,
);

const baseStyle = definePartsStyle({
  item: {
    backgroundColor: 'white',
    color: 'black',

    _hover: {
      backgroundColor: 'primary.main',
      color: 'white',
    },
  },
});

export const MenuStyle = defineMultiStyleConfig({ baseStyle });
