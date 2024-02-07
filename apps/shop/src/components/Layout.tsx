import { Link, Box, HStack, Image, MainLayout, Text } from '@3shop/ui';
import { Outlet } from 'react-router-dom';

import { NavBar } from './NavBar';
import { Plan_Enum, useGetPlanQuery } from '@3shop/apollo';
import { envVars } from '../envVars';

export const Layout = () => {
  const { data, loading } = useGetPlanQuery({ variables: { appId: envVars.APP_ID } });

  return (
    <Box>
      <NavBar />

      <MainLayout>
        <Outlet />
      </MainLayout>
      {!loading && data?.app?.plan === Plan_Enum.Free && (
        <footer>
          <Link href="https://www.sorcel.co" target="_blank">
            <HStack marginY={8} justifyContent="center">
              <Text fontWeight="bold">Powered by</Text>{' '}
              <Image
                maxW={24}
                src="https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/logo/logo.png"
              />
            </HStack>
          </Link>
        </footer>
      )}
    </Box>
  );
};
