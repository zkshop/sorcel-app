import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  Button,
} from 'ui';

type DeleteGateModalProps = {
  isDeleteGateModalOpen: boolean;
  onCloseDeleteGateModal(): void;
  gateIdToDelete: string | null;
  deleteGateLoading: boolean;
  handleClickOnDeleteModal(): void;
};

export const DeleteGateModal = ({
  isDeleteGateModalOpen,
  onCloseDeleteGateModal,
  gateIdToDelete,
  deleteGateLoading,
  handleClickOnDeleteModal,
}: DeleteGateModalProps) => (
  <Modal isOpen={isDeleteGateModalOpen} onClose={onCloseDeleteGateModal}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Delete Gate {gateIdToDelete}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>Do you want to delete Gate {gateIdToDelete}</ModalBody>
      <ModalFooter>
        <HStack justifyContent="flex-end">
          <Button onClick={onCloseDeleteGateModal}>Cancel</Button>
          <Button
            isLoading={deleteGateLoading}
            isDisabled={deleteGateLoading}
            onClick={handleClickOnDeleteModal}
            backgroundColor="red"
            color="white"
          >
            Delete
          </Button>
        </HStack>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
