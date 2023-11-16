import { ConnectButton } from '@rainbow-me/rainbowkit';
import { classnames } from '@3shop/config';

const Button = ({
  children,
  className,
  onClick,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  rest?: any;
}) => (
  <button type="button" className={className} onClick={onClick} {...rest}>
    {children}
  </button>
);

export const ConnectWalletButton = () => (
  <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      authenticationStatus,
      mounted,
    }) => {
      // Note: If your app doesn't use authentication, you
      // can remove all 'authenticationStatus' checks
      const ready = mounted && authenticationStatus !== 'loading';
      const connected =
        ready &&
        account &&
        chain &&
        (!authenticationStatus || authenticationStatus === 'authenticated');
      return (
        <div
          {...(!ready && {
            'aria-hidden': true,
            style: {
              opacity: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            },
          })}
        >
          {(() => {
            if (!connected) {
              return (
                <Button className={classnames.WALLET_CONNECT_BUTTON} onClick={openConnectModal}>
                  Connect Wallet
                </Button>
              );
            }
            if (chain.unsupported) {
              return (
                <Button className={classnames.WALLET_CONNECT_BUTTON} onClick={openChainModal}>
                  Wrong network
                </Button>
              );
            }
            return (
              <div style={{ display: 'flex', gap: 12 }}>
                <Button className={classnames.WALLET_CONNECT_BUTTON} onClick={openChainModal}>
                  {chain.hasIcon && (
                    <div
                      style={{
                        background: chain.iconBackground,
                        width: 30,
                        height: 30,
                        borderRadius: 999,
                        overflow: 'hidden',
                        marginRight: 4,
                      }}
                    >
                      {chain.iconUrl && (
                        <img
                          alt={chain.name ?? 'Chain icon'}
                          src={chain.iconUrl}
                          style={{ width: 30, height: 30 }}
                        />
                      )}
                    </div>
                  )}
                  {chain.name}
                </Button>
                <Button className={classnames.WALLET_CONNECT_BUTTON} onClick={openAccountModal}>
                  {account.displayName}
                </Button>
              </div>
            );
          })()}
        </div>
      );
    }}
  </ConnectButton.Custom>
);
