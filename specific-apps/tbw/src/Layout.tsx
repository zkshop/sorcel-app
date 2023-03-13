import { Box } from '@3shop/ui';
import { Outlet } from 'react-router-dom';
import { NavBar } from './modules/navbar';

export const Layout = () => (
  <Box>
    <NavBar />

    <Box mt="32px">
      <Outlet />
    </Box>
  </Box>
);
