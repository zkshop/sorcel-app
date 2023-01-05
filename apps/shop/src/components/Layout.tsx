import { Box, MainLayout, Banner } from '@3shop/ui';
import { Outlet } from 'react-router-dom';

import { NavBar } from './NavBar';

export const Layout = () => (
  <Box>
    <NavBar />
    <Banner />
    <MainLayout>
      <Outlet />
    </MainLayout>
  </Box>
);
