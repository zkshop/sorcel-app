import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalProps as ChakraModalProps
} from '@chakra-ui/react';
import React from 'react';

export type { ChakraModalProps };

export type ModalProps = {
  title: string;
  body: React.ReactNode;
  footer?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ title, body, isOpen, onClose, footer }: ModalProps) => (
  <ChakraModal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent color="black" backgroundColor="white">
      <ModalHeader backgroundColor="white" color="black">
        {title}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody backgroundColor="white" color="black">
        {body}
        {footer}
      </ModalBody>
    </ModalContent>
  </ChakraModal>
);
