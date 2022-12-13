import { VStack, HStack, Box } from 'ui';

import { useAccount } from 'wagmi';

import { useGetAppQuery } from 'apollo';
import { ConnectButtonGroup } from './ConnectButtonGroup';

const CLASSNAME = 'tbw-header';
const LOGO_CLASSNAME = 'tbw-header-logo';

export const NavBar = () => {
  const data = useGetAppQuery({
    variables: {
      appId: process.env.APP_ID,
    },
  });
  const appName = data?.data?.app?.name;

  const { isConnected } = useAccount();

  return (
    <VStack as="header" sx={{ p: 2, maxW: '875px', margin: 'auto' }} className={CLASSNAME}>
      <HStack w="full">
        <HStack justifyContent="space-between" flex={1}>
          <Box
            className={LOGO_CLASSNAME}
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
