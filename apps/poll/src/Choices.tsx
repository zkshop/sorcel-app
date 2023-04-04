import type { Nft } from '@3shop/alchemy';
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
  Heading,
} from '@3shop/ui';
import { LockedLayer } from '@3shop/ui/LockedLayer/LockedLayer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChoiceCard } from './ChoiceCard';
import { useAppSelector } from './store/store';

const isHolder = (nfts: Nft[], contractAddress: string) => {
  for (const nft of nfts) {
    if (nft.contract.address === contractAddress) return true;
  }

  return false;
};

export const Choices = () => {
  const { id } = useParams() as { id: string };
  const nfts = useAppSelector((state) => state.nfts);
  const { loading, data } = useGetPollByIdQuery({ variables: { id } });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [choice, setChoice] = useState<Nullable<string>>(null);
  const [alreadyVoted, setAlreadyVoted] = useState(false);
  console.log('data', data);
  console.log('data', isHolder(nfts, data?.poll?.gate || ''));
  const isLocked = data?.poll?.gate && !isHolder(nfts, data.poll.gate);

  if (loading) return <Spinner />;
  if (!data || !data.poll) return <>Error</>;

  const handleClickOnChoice = (text: string) => {
    setChoice(text);
    onOpen();
  };

  return (
    <>
      <Box height="100%" display="flex" flexDir="column">
        <Box position="relative" flex={1}>
          {isLocked && <LockedLayer />}
          <Image borderRadius={35} src="choices_background.png" />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
          {isLocked ? (
            <Heading textAlign="center" fontSize="x-large">
              Connect your wallet with Human Divergence NFT to vote
            </Heading>
          ) : (
            <Flex mt={12} gap={2} justifyContent="space-between">
              {data.poll.choices.map((choice) => (
                <ChoiceCard
                  handleClickOnChoice={handleClickOnChoice}
                  title={choice.value}
                  id={choice.id}
                  votes={choice.count}
                  alreadyVoted={alreadyVoted}
                />
              ))}
            </Flex>
          )}
        </Box>
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
