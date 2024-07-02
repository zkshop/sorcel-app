import React from 'react';
import { useEffect, useContext } from 'react';
import type { XummPostPayloadResponse, XummGetPayloadResponse } from 'xumm-sdk/dist/src/types';
import { HStack, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, VStack, Text, Button, CopyIcon, LogoutIcon, useToast, Box, Flex } from '@3shop/ui';
import { createContext } from 'react';
import { httpServerless } from '../../../http-serverless';
import { logo } from './logo';
import axios from 'axios';
import { Base } from '../../../../apps/admin/src/api/base';
import * as xrpl from 'xrpl';

type auth = {
  address: string | undefined,
  isConnected: boolean,
  isDisconnected: boolean
};

interface paymentRequest {
  id?: string
  amount: string,
  destination: string
}

export interface XamanContextType {
  modal: {
    open: (payment?: paymentRequest) => void;
    close: () => void;
    isOpen: boolean;
  },
  auth: auth;
  paid: paymentRequest[]
}

export const XamanWalletContext = createContext<XamanContextType | undefined>(undefined);

interface state {
  modalOpen: boolean,
  deepLink: boolean,
  apiResponse: XummPostPayloadResponse | undefined,
  currentStep: "none" | "scanned" | "signed" | "expired",
  xummPayload: any | undefined,
  auth: Omit<auth, "isConnected" | "isDisconnected">,
  payment: paymentRequest | undefined,
  paid: paymentRequest[]
}

const stepToDescription = new Map<state['currentStep'], string>(
  [['none', "Please scan the QR code with your Xaman mobile app"],
  ['scanned', "Slide to accept"]]
);

const stateInitialState: state = {
  modalOpen: false,
  deepLink: false,
  apiResponse: undefined,
  currentStep: "none",
  xummPayload: undefined,
  auth: {
    address: undefined,
  },
  payment: undefined,
  paid: []
}

export interface XamanWalletProviderProps { children: React.ReactNode };

const useSocketService = <T extends new (url: string) => Partial<WebSocket>>(websocketClient: T, websocket_status: string, onEvent: (event: any) => void) => {
  //TODO: handle error and close
  const socket = new websocketClient(websocket_status);
  socket.onmessage = (message) => {
    const eventData = JSON.parse(message.data);
    onEvent(eventData);
  };
  socket.onerror = (error) => {
    console.error('WebSocket error: ', error);
  };
  socket.onclose = () => {
    console.warn('WebSocket connection closed');
  };
  return socket;
}

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const XamanWalletProvider = ({ children }: XamanWalletProviderProps) => {
  const [state, setState] = React.useState<state>(stateInitialState);
  const toast = useToast();

  const setStateByKey = React.useCallback(<K extends keyof state>(key: K, value: state[K]) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  useEffect(() => {
    if ((!state.modalOpen && !state.deepLink) || (state.auth.address !== undefined && !state.payment))
      return;
    (async () => {
      try {
        // console.log("Sending payment request:", state.payment);
        const request = state.payment
          ? axios.post<XummPostPayloadResponse>(`${Base.backendBaseUrl}/api/xumm/payment`, { ...state.payment, account: state.auth.address })
          : httpServerless.post<XummPostPayloadResponse>("api/shop/xaman/signin");

        const { data } = await request;
        if (state.deepLink)
          window.location.href = `${data.next.always}/deeplink`;
        useSocketService(WebSocket, data.refs.websocket_status, (eventData) => {
          switch (true) {
            // unhandled events
            case eventData.devapp_fetched:
            case eventData.pre_signed:
            case eventData.dispatched:
              break;
            case 'expires_in_seconds' in eventData:
              if (Number(eventData.expires_in_seconds) <= 0)
                setStateByKey('currentStep', 'expired');
              break;
            case eventData.opened:
              setStateByKey('currentStep', 'scanned');
              break;
            case 'signed' in eventData:
              setStateByKey('currentStep', 'signed');
              setStateByKey('xummPayload', eventData);
              break;
            case eventData.expired:
              // TODO: handle expired behaviour
              setStateByKey('currentStep', 'expired');
              break;
            default:
              break;
          }
        });
        setStateByKey('apiResponse', data);
      } catch (e) {
        console.error(e);
      }
    })();

  }, [state.modalOpen, state.deepLink, state.payment]);

  useEffect(() => {
    (async () => {
      if (!state.xummPayload)
        return;
      try {
        const response = await httpServerless.post<XummGetPayloadResponse>("api/shop/xaman/payload", { payload_uuid: state.xummPayload['payload_uuidv4'] });
        console.log("!response xaman", response);
        const address = response.data.response.signer;
        if (state.payment && response.data.response.dispatched_result == "tesSUCCESS") {
          setStateByKey('paid', [...state.paid, state.payment]);
        } else {
          if (!address) {
            toast({
              status: 'error',
              title: 'We failed to authenticate you. Please try again',
            });
            handlers.disconnect();
          }
          else {
            setStateByKey('auth', { ...state.auth, address });
            setStateByKey('modalOpen', false);
          }
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [state.xummPayload]);

  const handlers = {
    close: () => {
      if (!state.auth.address)
        setState(stateInitialState);
      else
        setStateByKey('modalOpen', false);
    },
    copyAdress: () => {
      if (state.auth.address) {
        navigator.clipboard.writeText(state.auth.address);
        toast({
          status: 'success',
          title: 'Address copied to clipboard',
        });
      } else {
        toast({
          status: 'error',
          title: 'Failed to copy address to clipboard',
        });
      }
    },
    disconnect: () => {
      setState(stateInitialState);
    }
  }

  const RenderQrCode = ({ children }: { children: React.ReactElement[] | React.ReactElement }) => {
    if (!state.apiResponse)
      return <Spinner />;
    return (
      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <img src={state.apiResponse.refs.qr_png} alt="xaman-signin-qrcode" />
        {children}
      </Box>
    );
  }

  const stepDescription = () => stepToDescription.get(state.currentStep) || '';

  const renderModal: React.ReactNode = (
    <Modal isOpen={state.modalOpen} onClose={handlers.close}>
      <ModalOverlay />
      <ModalContent padding="6">
        {
          state.auth.address !== undefined && !state.payment ? (
            <>
              <ModalCloseButton />
              <VStack>
                {logo({ width: "70", height: "70" })}
                <svg width="100" height="100" viewBox="0 0 100 100" fill="#F5F5F5">
                  <circle cx="50" cy="50" r="50" fill="#F5F5F5" />
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="25">{state.auth.address?.substring(0, 3)}</text>
                </svg>
                <Text fontWeight="bold">{state.auth.address?.substring(0, 4) + "..." + state.auth.address?.slice(-4)}</Text>
                <HStack spacing="20px">
                  <Button leftIcon={<CopyIcon />} onClick={handlers.copyAdress}>Copy address</Button>
                  <Button variant={"negativeOutlined"} onClick={handlers.disconnect} leftIcon={<LogoutIcon />}>Disconnect</Button>
                </HStack>
              </VStack>
            </>
          ) : (
            <>
              <ModalHeader textAlign="center">
                {"Connect your xaman wallet"}
                <ModalCloseButton />
              </ModalHeader>
              <VStack align="center" spacing="0">
                <RenderQrCode>
                  <HStack>
                    <Spinner />
                    <Text>{stepDescription()}</Text>
                  </HStack >
                </RenderQrCode>
              </VStack>
            </>
          )
        }
      </ModalContent>
    </Modal>
  );

  return <>
    {renderModal}
    <XamanWalletContext.Provider value={{
      modal: {
        open: (request) => {
          if (request)
            setStateByKey('payment', {...request, amount: xrpl.xrpToDrops(request.amount)});
          if (isMobile() && !state.auth.address)
            setStateByKey('deepLink', true)
          else
            setStateByKey('modalOpen', true)
        },
        close: () => {
          setStateByKey('modalOpen', false);
          setStateByKey('payment', stateInitialState['payment']);
        },
        isOpen: ((): boolean => state.modalOpen)(),
      },
      auth: {
        address: state.auth.address,
        isConnected: ((): boolean => state.auth.address !== undefined)(),
        isDisconnected: ((): boolean => state.auth.address === undefined)(),
      },
      paid: state.paid,
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
