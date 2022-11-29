import {
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { Gate, useDeleteGateFromIdMutation } from 'apollo';
import { useState } from 'react';
import { Section, Button } from 'ui';
import { GateTable } from '../GateTable';
import { AddGateModal } from './AddGateModal';

type GateSectionProps = {
  gates: Gate[];
};

export const GateSection = ({ gates }: GateSectionProps) => {
  const {
    isOpen: isAddGateModalOpen,
    onClose: onCloseAddGateModal,
    onOpen: onOpenAddGateModal,
  } = useDisclosure();

  const {
    isOpen: isDeleteGateModalOpen,
    onClose: onCloseDeleteGateModal,
    onOpen: onOpenDeleteGateModal,
  } = useDisclosure();

  const toast = useToast();
  const [gateIdToDelete, setGateIdToDelete] = useState<string | null>(null);

  const [deleteGate, { loading: deleteGateLoading }] = useDeleteGateFromIdMutation();

  const handleClickOnCloseIcon = (id: string) => {
    setGateIdToDelete(id);
    onOpenDeleteGateModal();
  };

  const handleClickOnDeleteModal = async () => {
    try {
      await deleteGate({
        variables: {
          id: gateIdToDelete,
        },
      });

      toast({
        title: `Gate ${gateIdToDelete} deleted`,
        description: `Gate ${gateIdToDelete} has been deleted successfully`,
        status: 'success',
      });
      onCloseDeleteGateModal();
    } catch (e) {
      console.error(e);
      toast({
        title: 'An error occured',
        description: 'Please try again later',
        status: 'error',
      });
    }
  };

  return (
    <Section>
      <Heading fontSize="xl">
        Gates
        <Button float="right" onClick={onOpenAddGateModal}>
          + Create New Gate
        </Button>
      </Heading>

      <AddGateModal isFormValid={true} isOpen={isAddGateModalOpen} onClose={onCloseAddGateModal} />

      <GateTable handleClickOnCloseIcon={handleClickOnCloseIcon} gates={gates} />
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
              >
                Delete
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Section>
  );
};
