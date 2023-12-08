import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@3shop/ui';

type DeleteDeliveryZoneModalProps = {
  isOpen: boolean;
  onClose(): void;
  onDeleteDeliveryZoneClick(): void;
  isDeleteLoading: boolean;
};

export const DeleteDeliveryZoneModal = ({
  isOpen,
  onClose,
  onDeleteDeliveryZoneClick,
  isDeleteLoading,
}: DeleteDeliveryZoneModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Delete a delivery zone</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <span>Do you want to delete this zone ?</span>
      </ModalBody>
      <ModalFooter>
        <Button isDisabled={isDeleteLoading} onClick={onClose} mr={3}>
          No
        </Button>
        <Button
          onClick={onDeleteDeliveryZoneClick}
          backgroundColor="red"
          color="white"
          isDisabled={isDeleteLoading}
          isLoading={isDeleteLoading}
        >
          Yes
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
