import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';

type ModalProps = {
  title: string;
  body: React.ReactNode;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const Modal = ({ title, body, isOpen, onClose }: ModalProps) => (
  <ChakraModal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader color="black">{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{body}</ModalBody>
    </ModalContent>
  </ChakraModal>
);
