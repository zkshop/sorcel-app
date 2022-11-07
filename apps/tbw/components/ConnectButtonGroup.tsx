import { Flex } from '@chakra-ui/react';

import { Button } from './Button/Button';
import ConnectWalletButton from './ConnectWalletButton';
type ConnectButtonGroupProps = {
  isConnectedByWallet: boolean;
};

export function ConnectButtonGroup({ isConnectedByWallet }: ConnectButtonGroupProps) {
  if (isConnectedByWallet) return <ConnectWalletButton />;

  return (
    <Flex
      gap={1}
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <ConnectWalletButton />

      <Button
        sx={{
          fontFamily: 'Exo',
          fontSize: '16px',
          fontWeight: '700',
          borderRadius: 'xl',
        }}
      >
        Paper connect
      </Button>
    </Flex>
  );
}
