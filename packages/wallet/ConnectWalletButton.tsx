import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button, Text } from '@3shop/ui';

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
                <Button onClick={openConnectModal} type="button">
                  Connect Wallet
                </Button>
              );
            }
            if (chain.unsupported) {
              return (
                <Button onClick={openChainModal} type="button">
                  Wrong network
                </Button>
              );
            }
            return (
              <div style={{ display: 'flex', gap: 12 }}>
                <Button
                  onClick={openChainModal}
                  style={{ display: 'flex', alignItems: 'center' }}
                  type="button"
                >
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
                <Button overflow="hidden" onClick={openAccountModal} type="button">
                  <Text fontSize={{ xs: 'x-small', sm: 'small', md: 'md' }}>
                    {account.displayName}
                    {account.displayBalance ? ` (${account.displayBalance})` : ''}
                  </Text>
                </Button>
              </div>
            );
          })()}
        </div>
      );
    }}
  </ConnectButton.Custom>
);
