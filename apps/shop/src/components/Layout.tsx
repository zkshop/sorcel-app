import { Link, Box, HStack, Image, MainLayout, Text } from '@3shop/ui';
import { Outlet } from 'react-router-dom';

import { NavBar } from './NavBar';

export const Layout = () => (
  <Box>
    <NavBar />

    <MainLayout>
      <Outlet />
    </MainLayout>
    <footer>
      <Link href="https://www.3shop.co" target="_blank">
        <HStack marginY={8} justifyContent="center">
          <Text fontWeight="bold">Powered by</Text>{' '}
          <Image
            maxW={24}
            src="https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/logo/logo"
          />
        </HStack>
      </Link>
    </footer>
  </Box>
);
