import React from 'react';
import { Box } from '@chakra-ui/react';
import type { WithChildren } from '@3shop/types';

const FullScreenComponent = ({ children }: WithChildren<object>) => (
  <Box h="100%" w="100%" display="flex" alignItems="center" justifyContent="center">
    {/* Contenu du composant */}
    <Box bg="blue.500" color="white" p={4}>
      {children}
    </Box>
  </Box>
);

export const Customization = () => <FullScreenComponent>Customization</FullScreenComponent>;
