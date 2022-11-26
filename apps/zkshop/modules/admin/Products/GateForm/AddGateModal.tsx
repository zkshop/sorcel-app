import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Button } from 'ui';

type AddGateModalProps = {
  isOpen: boolean;
  onClose(): void;
  isFormValid: boolean;
};

export const AddGateModal = ({ isOpen, onClose, isFormValid }: AddGateModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Add Gate</ModalHeader>
      <ModalCloseButton />
      <ModalBody>Form</ModalBody>
      <ModalFooter>
        <Button backgroundColor="red" color="white" onClick={onClose} mr={3}>
          Cancel
        </Button>
        <Button isDisabled={!isFormValid}>Add</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
