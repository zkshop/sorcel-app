import React from 'react';
import { useEffect, useContext } from 'react';
import type { XummPostPayloadResponse } from '../../node_modules/xumm-sdk/dist/src/types';
import { HStack, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner } from '@3shop/ui';
import { createContext } from 'react';
import axios from 'axios';

type auth = {
  address: string | undefined,
  isConnected: boolean,
  isDisconnected: boolean
};

interface XamanContextType {
  modal: {
    open: () => void;
    close: () => void;
    isOpen: () => boolean;
  },
  auth: auth;
}

export const XamanWalletContext = createContext<XamanContextType | undefined>(undefined);

type XamanWalletProviderProps = { children: React.ReactNode };

interface state {
  modalOpen: boolean,
  apiResponse: XummPostPayloadResponse | undefined,
  socket: WebSocket | undefined,
  currentStep: "none" | "scanned" | "opened" | "signed" | "completed" | "expired",
  xummPayload: any | undefined,
  auth: auth
}

const stateInitialState: state = {
  socket: undefined,
  modalOpen: false,
  apiResponse: undefined,
  currentStep: "none",
  xummPayload: undefined,
  auth: {
    // address: "rLLAmbFhd44wWfUbYmLSfd4qeTH4WAtTUo",
    // address: "rQwKgL7aB37mVugoaKaXMfwfp6wmKrzKC8",
    address: "ra4JFPKcZUc6TYjt4bQ5e2WMTgjoQXaPHP",
    isConnected: true,
    isDisconnected: false
  }
}

export const XamanWalletProvider = ({ children }: XamanWalletProviderProps) => {
  const [state, setState] = React.useState<state>(stateInitialState);

  const setStateByKey = <K extends keyof state>(key: K, value: state[K]) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (!state.modalOpen || state.auth.isConnected)
      return;
    (async () => {
      try {
        const { data } = await axios.post<XummPostPayloadResponse>("http://localhost:3000/api/shop/xumm/signin");
        const socket = new WebSocket(data.refs.websocket_status); // https://docs.xumm.dev/concepts/payloads-sign-requests/status-updates/websocket
        socket.onopen = () => {
          console.log('WebSocket connection established');
        };
        socket.onmessage = (message) => {
          const eventData = JSON.parse(message.data);
          switch (true) {
            case 'expires_in_seconds' in eventData:
              if (Number(eventData.expires_in_seconds) <= 0)
                setStateByKey('currentStep', 'expired');
              console.log(`Payload will expire in ${eventData.expires_in_seconds} seconds.`);
              break;
            case eventData.opened:
              setStateByKey('currentStep', 'opened');
              break;
            case eventData.devapp_fetched:
              console.log('Payload details fetched by Xumm SDK/API.');
              break;
            case eventData.pre_signed:
              setStateByKey('currentStep', 'scanned');
              break;
            case eventData.dispatched:
              console.log('Submission to a node has started.');
              break;
            case 'signed' in eventData:
              setStateByKey('currentStep', 'signed');
              setStateByKey('xummPayload', eventData);
              break;
            case eventData.expired:
              setStateByKey('currentStep', 'expired');
              console.log('Payload has expired.');
              break;
            default:
              console.log('Received unknown event:', eventData);
          }
        };
        socket.onerror = (error) => {
          console.error('WebSocket error: ', error);
        };
        socket.onclose = () => {
          console.log('WebSocket connection closed');
        };
        setStateByKey('socket', socket);
        console.log("!data", data);
        setStateByKey('apiResponse', data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [state.modalOpen]);

  useEffect(() => {
    (async () => {
      if (!state.xummPayload)
        return;
      console.log("!payload uuid",);
      await axios.post<any>("http://localhost:3000/api/shop/xumm/payload", { payload_uuid: state.xummPayload['payload_uuidv4'] }).then(res => {
        console.log("final payload", res);
        setStateByKey('auth', { ...state.auth, address: res.data.response.signer });
      }).catch(e => {
        console.log("!err", e);
      });
    })();
    console.log("!ok payload", state.xummPayload);
  }, [state.xummPayload]);

  const handlers = {
    close: () => {
      setState(stateInitialState);
    },
  }

  const RenderQrCode = () => {
    if (!state.apiResponse)
      return <Spinner />;
    return <img src={state.apiResponse.refs.qr_png} alt="xaman-signin-qrcode" />
  }

  return <>
    <Modal isOpen={state.modalOpen} onClose={handlers.close}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {"Connect your xaman wallet"}
          <ModalCloseButton />
        </ModalHeader>
        <HStack>
          <RenderQrCode />
        </HStack>
      </ModalContent>
    </Modal>
    <XamanWalletContext.Provider value={{
      modal: {
        open: () =>
          setStateByKey('modalOpen', true),
        close: () => setStateByKey('modalOpen', false),
        isOpen: () => state.modalOpen == true
      },
      auth: {
        address: state.auth.address,
        isConnected: ((): boolean => state.auth.address !== undefined)(),
        isDisconnected: ((): boolean => state.auth.address === undefined)(),
      },
    }}>
      {children}
    </XamanWalletContext.Provider>
  </>
}

export const useAccount = () => {
  const context = useContext(XamanWalletContext);
  if (context === undefined) {
    throw new Error('useAccount must be used within a XamanWalletProvider');
  }
  return context.auth;
}