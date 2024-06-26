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

type DeleteProductModalProps = {
  isOpen: boolean;
  onClose(): void;
  isDeleteLoading: boolean;
  deleteProductOnClick(): Promise<void>;
  productName: string;
};

export function DeleteProductModal({
  isOpen,
  onClose,
  isDeleteLoading,
  deleteProductOnClick,
  productName,
}: DeleteProductModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete a product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <span>Do you want to delete {productName} ?</span>
        </ModalBody>
        <ModalFooter>
          <Button isDisabled={isDeleteLoading} onClick={onClose} mr={3}>
            No
          </Button>
          <Button
            onClick={deleteProductOnClick}
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
}
