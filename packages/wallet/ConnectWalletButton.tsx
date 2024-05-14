import React from 'react';
import { useEffect, useState, useContext, createContext } from 'react';
import { XamanWalletContext } from './internal/xaman/XamanWalletProvider';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box, Button, Text, HStack, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, VStack } from '@3shop/ui';
import { classnames } from '@3shop/config';
import { XamanContextType } from './internal/xaman/XamanWalletProvider';
import { envVars } from '@3shop/config';
import { Network_Enum } from '../apollo';
import { HeirloomDidContextType, HeirloomDidContext } from './internal/Heirloom/HeirloomDidProvider';

const walletUsed: "xaman" | "rainbow" = (() => {
  if ([Network_Enum.Ethereum, Network_Enum.Polygon].includes(envVars.NETWORK))
    return "rainbow";
  return "xaman";
})();

export const XamanConnectButton = ({ children }: { children: (args: { modal: XamanContextType['modal'], auth: XamanContextType['auth'] }) => React.ReactNode }) => {
  const context = useContext(XamanWalletContext);

  if (!context) {
    console.error('XamanConnectButton must be used within a XamanWalletProvider');
    return null;
  }

  const { modal, auth } = context;

  const renderChildren = children({ modal, auth });

  return <>{renderChildren}</>;
};

const Xaman = () => {
  return (
    <XamanConnectButton>
      {({ modal, auth }) => {
        if (auth.isConnected)
          return <Button
            className={classnames.WALLET_CONNECT_BUTTON}
            onClick={modal.open}
            type="button"
          >
            {auth.address?.substring(0, 4) + "..." + auth.address?.slice(-4)}
          </Button>
        else
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

export const HeirloomConnectButton = ({ children }: { children: (args: { modal: HeirloomDidContextType['modal'] }) => React.ReactNode }) => {
  const context = useContext(HeirloomDidContext);

  if (!context) {
    console.error('HeirloomConnectButton must be used within a HeirloomDidProvider');
    return null;
  }

  const { modal } = context;

  const renderChildren = children({ modal });

  return <>{renderChildren}</>;
};

export const Heirloom = () => {
  return (
    <HeirloomConnectButton>
      {({ modal }) => {
        if (modal.isOpen)
          return <Button
            className={classnames.WALLET_CONNECT_BUTTON}
            onClick={modal.open}
            type="button"
          >
            Disconnect Wallet
          </Button>
        else
          return <Button
            className={classnames.WALLET_CONNECT_BUTTON}
            onClick={modal.open}
            type="button"
          >
            Connect Wallet
          </Button>
      }}
    </HeirloomConnectButton>
  );
}

// export const HeirloomConnectButton = () => {
//   const [modalOpen, setModalOpen] = React.useState(false);
//   const [qrCodeUrl, setQrCodeUrl] = React.useState('');
//   const [loginChallenge, setLoginChallenge] = useState<LoginChallenge | undefined>(undefined);
//   const apiKey = '2TM48axixME353Qz1yrBkeLHuiyJR4frUD74nn97qT9T';
//   const sdk = new HeirloomSdk(apiKey);

//   const heirloom = new api('heirloom').getInstance();

//   const handleLogin = async () => {
//     try {
//       // const { data } = await heirloom.get<LoginChallenge>('/challenges');
//       const data = await sdk.challenges();
//       if (data)
//         setLoginChallenge(data);
//       // setQrCodeUrl(data.loginChallengeUrl);
//       setModalOpen(true);
//     } catch (e) {
//       console.error("!err", e);
//     }
//   };

//   useEffect(() => {
//     if (!loginChallenge)
//       return;
//     const jwtChallenge = loginChallenge.loginChallenge;
//     const apiBaseUrl = 'wss://api.heirloom.io';

//     const socket = io(apiBaseUrl, {
//       query: { apiKey, jwtChallenge },
//     });

//     const topic = `tokens:${apiKey}:${jwtChallenge}`;

//     socket.on('connect', () => {
//       console.log(socket);
//       console.log('Connected to the server');
//     });

//     socket.on('connect_error', (error) => {
//       console.error('Connection error:', error);
//     });

//     socket.on('error', (errorMessage) => {
//       console.error('Error from server:', errorMessage);
//     });

//     socket.on(topic, (message) => {
//       console.log('Received message:', message);

//       // Emit acknowledgement of receipt back to the server
//       socket.emit(`acknowledgement-${topic}`);
//     });

//     socket.on('disconnect', () => {
//       console.log('Disconnected from the server');
//     });
//   }, [loginChallenge]);

//   return <>
//     <Button onClick={handleLogin}>
//       Quick Login
//     </Button>
//     {modalOpen && (
//       <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Heirloom QuickLogin</ModalHeader>
//           <ModalCloseButton />
//           <Box display="flex" justifyContent="center" padding="6">
//             <QRCodeSVG value={loginChallenge?.loginChallengeUrl || ""} size={256} />
//           </Box>
//         </ModalContent>
//       </Modal>
//     )}
//   </>
// }


export const ConnectWalletButton = () => {
  return (<>{
    {
      "xaman": <Xaman />,
      "rainbow": <RainbowConnectButton />,
      "heirloom": <Heirloom />
    }["heirloom"]
  }</>)
}