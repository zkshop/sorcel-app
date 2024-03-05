import React from 'react';
import { XamanWalletContext } from './XamanWalletProvider';
import { useContext } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@3shop/ui';
import { classnames } from '@3shop/config';
type WalletType = "xaman" | "rainbow";
const walletUsed: WalletType = "xaman";

export const XamanConnectButton = ({ children }: { children: (args: { modal: any }) => React.ReactNode }) => {
  const context = useContext(XamanWalletContext);

  if (!context) {
    console.error('XamanConnectButton must be used within a XamanWalletProvider');
    return null;
  }

  const { modal } = context;

  const renderChildren = children({ modal });

  return <>{renderChildren}</>;
};

const Xaman = () => {
  return (
    <XamanConnectButton>
      {({ modal }) => {
        return <Button
          className={classnames.WALLET_CONNECT_BUTTON}
          onClick={modal.open}
          type="button"
        >
          Connect Wallet
        </Button>
      }}
    </XamanConnectButton>
  );
}

export const RainbowConnectButton = () => {
  return (
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
                  <Button
                    className={classnames.WALLET_CONNECT_BUTTON}
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    className={classnames.WALLET_CONNECT_BUTTON}
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </Button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <Button
                    className={classnames.WALLET_CONNECT_BUTTON}
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
                  <Button
                    className={classnames.WALLET_CONNECT_BUTTON}
                    overflow="hidden"
                    onClick={openAccountModal}
                    type="button"
                    fontSize={{ xs: 'x-small', sm: 'small', md: 'md' }}
                  >
                    {account.displayName}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  )
};


export const ConnectWalletButton = () => {
  return (<>{
    {
      "xaman": <Xaman />,
      "rainbow": <RainbowConnectButton />
    }["xaman"]
  }</>)
}
