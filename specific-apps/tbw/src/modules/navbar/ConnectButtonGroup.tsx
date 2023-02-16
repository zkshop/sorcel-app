import { Flex, Button } from '@3shop/ui-tbw';

import { LoginWithPaper } from './LoginWithPaper';
import { ConnectWalletButton } from '@3shop/wallet';

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

      <LoginWithPaper>
        {({ onClick }: { onClick: () => void }) => (
          <Button
            sx={{
              fontFamily: 'Exo',
              fontSize: '16px',
              fontWeight: '700',
              borderRadius: 'xl',
            }}
            onClick={onClick}
          >
            Paper connect
          </Button>
        )}
      </LoginWithPaper>
    </Flex>
  );
}
