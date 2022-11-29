import { VStack, HStack, Box } from '@chakra-ui/react';

import { useAppDispatch } from '../../store';
import { useEffect } from 'react';

import { useAccount } from 'wagmi';

import { useGetAppQuery } from 'apollo';
import { ConnectButtonGroup } from './ConnectButtonGroup';
// import { getCurrentUser } from '../../store/reducer/auth';

type NavBarProps = {
  admin?: boolean;
};

export const NavBar = ({}: NavBarProps) => {
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
      // await dispatch(getCurrentUser());
    }

    changeUserIsLoading();
  }, [dispatch]);

  return (
    <VStack as="header" sx={{ p: 2, maxW: '875px', margin: 'auto' }} className="tbw-header">
      <HStack w="full">
        <HStack justifyContent="space-between" flex={1}>
          <Box
            className="tbw-logo"
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

          <ConnectButtonGroup isConnectedByWallet={isConnected} />
        </HStack>
      </HStack>
    </VStack>
  );
};
