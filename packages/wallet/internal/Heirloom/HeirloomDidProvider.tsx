import { Spinner, Box, Modal, Text, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, VStack, HStack } from "@3shop/ui";
import React, { useEffect, createContext } from "react";
import { io } from "socket.io-client";
import { QRCodeSVG } from 'qrcode.react';
import { LoginChallenge, HeirloomSdk } from "./HeirloomSdk";

function decodeJWT(token) {
  const base64Url = token.split('.')[1]; // Get the payload part
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Convert base64url to base64
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

interface state {
  modalOpen: boolean,
  loginChallenge: LoginChallenge | null,
}

const stateInitialState: state = {
  modalOpen: false,
  loginChallenge: null
}

export interface HeirloomDidContextType {
  modal: {
    open: () => Promise<void>,
    close: () => void,
    isOpen: boolean
  }
}

export const HeirloomDidContext = createContext<HeirloomDidContextType | undefined>(undefined);
export interface HeirloomDidProviderProps { children: React.ReactNode };

export const HeirloomDidProvider = ({ children }: HeirloomDidProviderProps) => {
  const [state, setState] = React.useState<state>(stateInitialState);
  const apiKey = '2uiZgj7iouf9nACd5ReHJ94pViqSVF8JonoYeTiNjTVJ';
  const sdk = new HeirloomSdk(apiKey);

  const setStateByKey = React.useCallback(<K extends keyof state>(key: K, value: state[K]) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  useEffect(() => {
    if (!state.loginChallenge)
      return;
    const jwtChallenge = state.loginChallenge.loginChallenge;
    const apiBaseUrl = 'wss://api.heirloom.io';
    console.log("!jwt", jwtChallenge);
    const socket = io(apiBaseUrl, {
      query: { apiKey, jwtChallenge },
    });

    const topic = `tokens:${apiKey}:${jwtChallenge}`;

    socket.on('connect', () => {
      console.log(socket);
      console.log('Connected to the server');
    });

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    socket.on('error', (errorMessage) => {
      console.error('Error from server:', errorMessage);
    });
    //   {
    //     "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJodHRwczovL2FwaS5oZWlybG9vbS5pby9hdXRoIiwiYXVkaWVuY2UiOiJodHRwczovL2ZvcnR5LXdvcmRzLXRpZS5sb2NhLmx0Iiwic3ViamVjdCI6ImRpZDpoZWlybG9vbS1wb2x5Z29uOjM2NTY1ODU5LUMyQjAtNDgxMC05QkQxLUYzOUVBRDY5MzY0MyIsImlhdCI6MTcxNTY4OTcxNywiZXhwIjoxNzIwODczNzE3fQ.63N_qpL56xHCHnMR7-YcQLBfCTs_Rbt57OSUOy9gfbk"
    // }
    socket.on(topic, (message: Partial<{ authToken: string }>) => {
      console.log('Received message:', message);
      if (!message || !message['authToken']) {

      } else  {
        const decoded = decodeJWT(message.authToken);
        console.log("!decoded", decoded);
      }

      // Emit acknowledgement of receipt back to the server
      socket.emit(`acknowledgement-${topic}`);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from the server');
    });
  }, [state.loginChallenge]);

  const handleChallenge = async () => {
    try {
      const data = await sdk.challenges();
      data && setStateByKey('loginChallenge', data);
    } catch (e) {
      console.error("!err", e);
    }
  }

  const handlers = {
    close: () => {
      setState(stateInitialState);
      // setStateByKey('modalOpen', false);
    },
    open: async () => {
      setStateByKey('modalOpen', true);
      await handleChallenge();
    }
  }
  const RenderQrCode = ({ children }: { children: React.ReactElement[] | React.ReactElement }) => {
    if (!state.loginChallenge)
      return <Spinner />;
    return (
      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <QRCodeSVG value={state.loginChallenge.loginChallengeUrl || ""} size={256} />
        {children}
      </Box>
    );
  }

  const renderModal: React.ReactNode = (
    <Modal isOpen={state.modalOpen} onClose={handlers.close}>
      <ModalOverlay />
      <ModalContent padding="6">
        <ModalHeader textAlign="center">
          {"Connect your Heirloom DID"}
          <ModalCloseButton />
        </ModalHeader>
        <VStack align="center" spacing="0">
          <RenderQrCode>
            <HStack>
              <Spinner />
              <Text>{"step"}</Text>
            </HStack >
          </RenderQrCode>
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
      }
    }}>
      {children}
    </HeirloomDidContext.Provider>
  </>
}