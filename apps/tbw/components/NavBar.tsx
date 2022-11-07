import { ConnectButtonGroup } from './ConnectButtonGroup';
import { VStack, HStack, Box } from '@chakra-ui/react';
import Link from 'next/link';

import { getCurrentUser } from 'store/slices/auth';
import { useAppDispatch } from 'store/store';
import { useEffect } from 'react';

import { useAccount } from 'wagmi';

import { useGetAppQuery } from 'apollo';

type NavBarProps = {
  admin: boolean;
};

export const NavBar = ({ admin }: NavBarProps) => {
  const data = useGetAppQuery({
    variables: {
      appId: process.env.APP_ID,
    },
  });
  const appName = data?.data?.app?.name;

  const dispatch = useAppDispatch();
  const { isConnected } = useAccount();

  useEffect(() => {
    async function changeUserIsLoading() {
      await dispatch(getCurrentUser());
    }

    changeUserIsLoading();
  }, [dispatch]);

  return (
    <VStack as="header" sx={{ p: 2, maxW: '875px', margin: 'auto' }}>
      <HStack w="full">
        <HStack justifyContent="space-between" flex={1}>
          <Link href="/">
            <Box
              sx={{
                fontFamily: 'Exo',
                fontSize: '45px',
                fontWeight: '800',
                lineHeight: '47px',
                color: '#000000',
              }}
            >
              {appName}
            </Box>
          </Link>

          {!admin && <ConnectButtonGroup isConnectedByWallet={isConnected} />}
        </HStack>
      </HStack>
    </VStack>
  );
};
