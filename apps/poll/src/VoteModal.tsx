import type { Nullable } from '@3shop/types';
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
import type { ChoiceType } from './utils';

type VoteModal = {
  isOpen: boolean;
  onClose: () => void;
  choice: Nullable<ChoiceType>;
  handleVote: (choiceId: string) => Promise<void>;
  loading: boolean;
};

export function VoteModal({ isOpen, onClose, choice, handleVote, loading }: VoteModal) {
  if (!choice) return null;

  const handleClickonConfirmVote = async () => {
    await handleVote(choice.id);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Vote for {choice?.value}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Vote for poll choice {'"' + choice?.value + '"'} ? You can vote only once.
        </ModalBody>
        <ModalFooter>
          <Button isDisabled={loading} backgroundColor="red" color="white" onClick={onClose} mr={3}>
            No
          </Button>
          <Button onClick={handleClickonConfirmVote} isLoading={loading} isDisabled={loading}>
            Yes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
