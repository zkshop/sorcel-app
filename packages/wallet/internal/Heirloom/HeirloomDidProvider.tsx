import { Spinner, Box, Modal, Text, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, VStack, HStack, Button } from "@3shop/ui";
import React, { createContext } from "react";
import { QRCodeSVG } from 'qrcode.react';
import { DecodedJWT, HeirloomSdk } from "./HeirloomSdk";
import { sorcelApp as sorcelAppApi } from "../../../../apps/shop/src/api/sorcel-app/sorcel-app";
import { app } from "@prisma/client";

export type heirloomApp = Pick<app, 'heirloomApiKey' | 'heirloomLockId' | 'heirloomLockName'> | undefined;

interface state {
  modalOpen: boolean,
  expired: boolean,
  qrCodeUrl: string | undefined,
  response: {
    did: string,
    data: DecodedJWT | undefined,
    raw: { authToken: string } | undefined
  } | undefined,
  heirloomApp: heirloomApp
}

const stateInitialState: state = {
  modalOpen: false,
  expired: false,
  qrCodeUrl: undefined,
  response: undefined,
  heirloomApp: undefined
}

export interface HeirloomDidContextType {
  modal: {
    open: () => Promise<void>,
    close: () => void,
    isOpen: state['modalOpen']
  },
  response: state['response'],
  heirloomApp: state['heirloomApp']
}

export const HeirloomDidContext = createContext<HeirloomDidContextType | undefined>(undefined);
export interface HeirloomDidProviderProps { children: React.ReactNode };

export const HeirloomDidProvider = ({ children }: HeirloomDidProviderProps) => {
  const [state, setState] = React.useState<state>(stateInitialState);
  const [heirloom, setHeirloom] = React.useState<heirloomApp>(undefined);

  const setStateByKey = React.useCallback(<K extends keyof state>(key: K, value: state[K]) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  async function handleQuickLogin() {
    console.log("!API KEY", heirloom);
    const sdk = new HeirloomSdk(heirloom?.heirloomApiKey!);
    await sdk.quickLogin(heirloom?.heirloomLockId!, (url) => setStateByKey('qrCodeUrl', url), (did, data, raw) => {
      setStateByKey('response', {
        did,
        data,
        raw
      })
      console.log("!did received: ", did);
    }, (err) => {
      console.error("!err", err);
    });
  }

  React.useEffect(() => {
    const fetchApiKey = async () => {
      const sorcelApp = new sorcelAppApi();
      // console.log("!settings", sorcelApp.getInstance().defaults);
      try {
        //@ts-ignore
        const { data } = await sorcelApp.getHeirloom(window.__3SHOP_APP_ID__);
        setStateByKey('heirloomApp', data.data);
        setHeirloom(data.data);
      } catch (e) {
        // TODO: handle error
        console.error("HeirloomApp error",e);
      }
    };
    fetchApiKey();
  }, []);

  const handlers = {
    close: () => {
      setState(stateInitialState);
    },
    open: async () => {
      setStateByKey('modalOpen', true);
      await handleQuickLogin();
    }
  }

  const RenderQrCode = ({ children }: { children: React.ReactElement[] | React.ReactElement }) => {
    if (!state.qrCodeUrl)
      return <Spinner />;
    return (
      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" gap={2}>
        <QRCodeSVG value={state.qrCodeUrl || ""} size={256} />
        {children}
      </Box>
    );
  }

  const TimerBar = ({ seconds, onTimeout }: { seconds: number; onTimeout: () => void }) => {
    const [remainingTime, setRemainingTime] = React.useState(seconds);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime < 0) {
            clearInterval(interval);
            setTimeout(onTimeout, 0);
            return prevTime;
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [seconds, onTimeout]);

    const percentage = (remainingTime / seconds) * 100;

    const blackBarNode = React.useMemo(() => (
      <Box
        width={`${percentage}%`}
        bg="black"
        height="100%"
        transition="width 1s linear"
        position="relative"
        zIndex="1"
      />
    ), [percentage]);

    return (
      <Box width="100%" bg="gray.200" position="relative" height="10px">
        <Box
          width="100%"
          bg="grey"
          opacity="50%"
          height="100%"
          position="absolute"
          zIndex="0"
        />
        {blackBarNode}
      </Box>
    );
  };

  const renderModal: React.ReactNode = (
    <Modal isOpen={state.modalOpen} onClose={handlers.close}>
      <ModalOverlay />
      <ModalContent padding="6">
        <ModalHeader textAlign="center">
          {"Connect your Heirloom DID"}
          <ModalCloseButton />
        </ModalHeader>
        <VStack align="center" spacing="0">
          {state.expired ? (
            <VStack>
              <Text>The request expired, you might not have the right access. If you think this is an error, please contact support.</Text>
              <Button onClick={() => {
                setStateByKey('expired', false);
              }}>Try Again</Button>
            </VStack>
          ) : (
            <RenderQrCode>
              <TimerBar seconds={30} onTimeout={() => {
                setStateByKey('expired', true);
                setStateByKey('qrCodeUrl', stateInitialState.qrCodeUrl);
                (async () => await handleQuickLogin())();
              }} />
            </RenderQrCode>
          )}
        </VStack>
      </ModalContent>
    </Modal>
  )

  return <>
    {renderModal}
    <HeirloomDidContext.Provider value={{
      modal: {
        open: handlers.open,
        close: handlers.close,
        isOpen: ((): boolean => state.modalOpen)()
      },
      heirloomApp: state.heirloomApp,
      response: state.response
    }}>
      {children}
    </HeirloomDidContext.Provider>
  </>
}