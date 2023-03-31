import { useGetPollByIdQuery } from '@3shop/apollo';
import type { Nullable } from '@3shop/types';
import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from '@3shop/ui';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChoiceCard } from './ChoiceCard';

const votes = [10, 25, 42];

export const Choices = () => {
  const { id } = useParams() as { id: string };
  const { loading, data } = useGetPollByIdQuery({ variables: { id } });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [choice, setChoice] = useState<Nullable<string>>(null);
  const [alreadyVoted, setAlreadyVoted] = useState(false);

  if (loading) return <Spinner />;
  if (!data) return <>Error</>;

  const handleClickOnChoice = (text: string) => {
    setChoice(text);
    onOpen();
  };

  return (
    <>
      <Box>
        <Image borderRadius={35} src="choices_background.png" />
        <Flex mt={12} gap={2} justifyContent="space-between">
          {data.poll?.choices.map((choice) => (
            <ChoiceCard
              handleClickOnChoice={handleClickOnChoice}
              title={choice.value}
              id={choice.id}
              votes={votes[1]}
              alreadyVoted={alreadyVoted}
            />
          ))}
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Vote for {choice}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Vote for poll choice {'"' + choice + '"'} ? You can vote only once.</ModalBody>
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
