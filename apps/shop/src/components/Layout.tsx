import { Box, MainLayout } from '@3shop/ui';
import { Outlet } from 'react-router-dom';

import { NavBar } from './NavBar';

export const Layout = () => (
  <Box>
    <NavBar />

    <MainLayout>
      <Outlet />
    </MainLayout>
  </Box>
);
