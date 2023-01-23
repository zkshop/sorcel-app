import { VStack, HStack, Box } from '@3shop/ui-tbw';

import { useAccount } from 'wagmi';

import { useGetAppQuery } from '@3shop/apollo';
import { ConnectButtonGroup } from './ConnectButtonGroup';
import { envVars } from '@3shop/config';

const CLASSNAME = 'tbw-header';
const LOGO_CLASSNAME = 'tbw-header-logo';

export const NavBar = () => {
  const data = useGetAppQuery({
    variables: {
      appId: envVars.APP_ID,
    },
  });
  const appName = data?.data?.app?.name;

  const { isConnected } = useAccount();

  return (
    <VStack as="header" sx={{ p: 2, maxW: '875px', m: 'auto' }} className={CLASSNAME}>
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
