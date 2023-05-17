import { Box, HStack, Image, MainLayout, Text } from '@3shop/ui';
import { Outlet } from 'react-router-dom';

import { NavBar } from './NavBar';

export const Layout = () => (
  <Box>
    <NavBar />

    <MainLayout>
      <Outlet />
    </MainLayout>
    <footer>
      <HStack marginY={8} justifyContent="center">
        <Text fontWeight="bold">Powered by</Text> <Image maxW={24} src="/logo.png" />
      </HStack>
    </footer>
  </Box>
);
