import React from 'react';
import { useState, useEffect } from 'react';
import { Xumm } from 'xumm';
import type { XummPostPayloadResponse } from '../../node_modules/xumm-sdk/dist/src/types';
import { Button, Text, HStack, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner } from '@3shop/ui';
import { createContext } from 'react';
import axios from 'axios';
import { reset } from 'node_modules/@3shop/store/slices/poapImageList';

interface XamanContextType {
  modal: {
    open: () => void;
    close: () => void;
    isOpen: () => boolean;
  },
  account: string | undefined
}

export const XamanWalletContext = createContext<XamanContextType | undefined>(undefined);
const xumm = new Xumm("de7681ce-0e13-492e-807d-3b79f48c2dd9", "0d135bbd-1c83-49e9-8dbc-429ea558e4ca");

type XamanWalletProviderProps = { children: React.ReactNode };

interface state {
  modalOpen: boolean,
  apiResponse: XummPostPayloadResponse | undefined,
  socket: WebSocket | undefined,
  currentStep: "none" | "scanned" | "opened" | "signed" | "completed" | "expired",
  xummPayload: any | undefined,
  account: string | undefined
}

const stateInitialState: state = {
  socket: undefined,
  modalOpen: false,
  apiResponse: undefined,
  currentStep: "none",
  xummPayload: undefined,
  account: undefined
}

// console.log("data", data);

export const XamanWalletProvider = ({ children }: XamanWalletProviderProps) => {
  const [state, setState] = React.useState<state>(stateInitialState);

  const setStateByKey = <K extends keyof state>(key: K, value: state[K]) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (!state.modalOpen)
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
      }).catch(e => {
        console.log("!err", e);
      });
      // console.log("!res payload", res);
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
      account: undefined
    }}>
      {children}
    </XamanWalletContext.Provider>
  </>
}
