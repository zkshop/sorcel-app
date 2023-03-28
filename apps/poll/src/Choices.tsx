import type { Nullable } from '@3shop/types';
import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@3shop/ui';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChoiceCard } from './ChoiceCard';

const votes = [10, 25, 42];

export const Choices = () => {
  const { id } = useParams() as { id: string };
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [choice, setChoice] = useState<Nullable<string>>(null);
  const [alreadyVoted, setAlreadyVoted] = useState(false);

  const handleClickOnChoice = (id: string) => {
    setChoice(id);
    onOpen();
  };

  return (
    <>
      <Box>
        <Heading>Choices for poll {id}</Heading>
        <Flex mt={12} gap={2} justifyContent="space-around">
          <ChoiceCard
            handleClickOnChoice={handleClickOnChoice}
            title="Choice 1"
            id="1000"
            votes={votes[0]}
            alreadyVoted={alreadyVoted}
          />
          <ChoiceCard
            handleClickOnChoice={handleClickOnChoice}
            title="Choice 2"
            id="1001"
            votes={votes[1]}
            alreadyVoted={alreadyVoted}
          />
          <ChoiceCard
            handleClickOnChoice={handleClickOnChoice}
            title="Choice 3"
            id="1003"
            votes={votes[2]}
            alreadyVoted={alreadyVoted}
          />
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Vote for {choice}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Vote for poll choice {choice} ? You can vote only once.</ModalBody>
          <ModalFooter>
            <Button backgroundColor="red" color="white" onClick={onClose} mr={3}>
              No
            </Button>
            <Button
              onClick={() => {
                setAlreadyVoted(true);
                onClose();
              }}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};