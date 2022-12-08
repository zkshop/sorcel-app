<<<<<<< HEAD
import { Heading, useDisclosure, useToast, Section, Button } from 'ui';
import { Gate, useDeleteGateFromIdMutation } from 'apollo';
import { useState } from 'react';
import { GateTable } from '../GateTable';
import { AddGateModal } from './AddGateModal';
import { DeleteGateModal } from './DeleteGateModal';

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

  const [deleteGate, { data, loading: deleteGateLoading }] = useDeleteGateFromIdMutation();

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
=======
import { Heading, useDisclosure } from '@chakra-ui/react';
import { Section, Button } from 'ui';
import { AddGateModal } from './AddGateModal';

export const GateSection = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
>>>>>>> dbf5779 (feat(admin): form to add gate to product)

  return (
    <Section>
      <Heading fontSize="xl">
        Gates
        <Button float="right" onClick={onOpenAddGateModal}>
          + Create New Gate
        </Button>
      </Heading>

<<<<<<< HEAD
      <AddGateModal isFormValid={true} isOpen={isAddGateModalOpen} onClose={onCloseAddGateModal} />

      <GateTable handleClickOnCloseIcon={handleClickOnCloseIcon} gates={gates} />
      <DeleteGateModal
        isDeleteGateModalOpen={isDeleteGateModalOpen}
        onCloseDeleteGateModal={onCloseDeleteGateModal}
        gateIdToDelete={gateIdToDelete}
        deleteGateLoading={deleteGateLoading}
        handleClickOnDeleteModal={handleClickOnDeleteModal}
      />
=======
      <AddGateModal isFormValid={true} isOpen={isOpen} onClose={onClose} />
>>>>>>> dbf5779 (feat(admin): form to add gate to product)
    </Section>
  );
};
