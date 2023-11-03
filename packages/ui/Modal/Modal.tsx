import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import React from 'react';

type ModalProps = {
  title: string;
  body: React.ReactNode;
  footer?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ title, body, isOpen, onClose, footer }: ModalProps) => (
  <ChakraModal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{body}</ModalBody>
      {footer && <ModalBody>{footer}</ModalBody>}
    </ModalContent>
  </ChakraModal>
);
