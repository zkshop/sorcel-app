import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  selectAnatomy.keys,
);

const baseStyle = definePartsStyle({
  borderColor: 'greyscales.200',
  border: '1px solid',
  field: {
    borderColor: 'greyscales.200',
    border: '1px solid',
  },
});

export const SelectStyle = defineMultiStyleConfig({ baseStyle });
