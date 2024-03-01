import React from 'react';
import { useState, useEffect } from 'react';
import { Xumm } from 'xumm';
import { Button, HStack, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@3shop/ui';
import { useOnce } from '../../apps/shop/utils/useOnce';
interface XamanContextType {

}

type XamanWalletProviderProps = { children: React.ReactNode };
interface state {
  modalOpen: boolean,
  qrCode: string | undefined,
  xumm: Xumm | undefined
}


// export const signIn = async () => {
//   const request: any = {
//     txjson: { TransactionType: "SignIn" },
//     options: { submit: true },
//   };
//   const payload = await xumm.payload?.create(request);
//   console.log("!payload", payload);
// }

export const XamanWalletProvider = ({ children }: XamanWalletProviderProps) => {
  const [state, setState] = React.useState<state>({
    modalOpen: true,
    qrCode: undefined,
    xumm: new Xumm(process.env['XAMAN_API_KEY']!, process.env['XAMAN_SECRET_KEY'])
  });

  const setStateByKey = <K extends keyof state>(key: K, value: state[K]) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const request: any = {
    txjson: { TransactionType: "SignIn" },
    options: { submit: true },
  };
  // await xumm.payload?.create(request).then((payload: any) => {
  useEffect(() => {
    console.log("!effect");
    if (!state.xumm || !state.modalOpen)
      return;
    console.log("ok", state.xumm);
    (async () => {
      if (state.xumm) {
        const { payload } = state.xumm;
        if (payload) {
          console.log("pong", await state.xumm.ping());
          // await payload?.create(request).then((payload: any) => {
          //   console.log("!!!!!+++payload", payload);
          // });

          // console.log("payload ok");
          // payload.create()
        } else
          console.log("payload not ok");
        // console.log("!payload", payload);
      }
    })();
    // console.log('Xumm instance updated', state.xumm);
  }, [state.xumm, state.modalOpen]);
  const handlers = {
    close: () => {
      setStateByKey('modalOpen', false);
    },
  }
  return <>
    <Modal isOpen={state.modalOpen} onClose={handlers.close}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {"Connect your xaman wallet"}
          <ModalCloseButton />
        </ModalHeader>
      </ModalContent>

    </Modal >
    {children}
  </>
}
