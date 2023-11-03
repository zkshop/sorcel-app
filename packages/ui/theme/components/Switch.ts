import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  switchAnatomy.keys,
);

const baseStyle = definePartsStyle({
  thumb: {
    bg: 'white',
  },
  track: {
    bg: 'gray.200',
    _checked: {
      bg: 'primary.main',
    },
  },
});

export const SwitchStyle = defineMultiStyleConfig({ baseStyle });
