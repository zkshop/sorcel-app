import { VoteModal } from './VoteModal';
import { useGetPollByIdQuery, useVoteMutation } from '@3shop/apollo';
import type { Nullable } from '@3shop/types';
import { Box, Flex, Spinner, useDisclosure, Heading, useToast, Text } from '@3shop/ui';

import { useAccount } from '@3shop/wallet';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChoiceCard } from './ChoiceCard';
import { useAppSelector } from './store/store';
import type { ChoiceType } from './utils';
import { isHolder } from './utils';
import { haveAlreadyVote } from './utils/haveAlreadyVote';
import { Image } from './Image';
import { updateCacheAfterVote } from './cache';
import { CHOICE_CARD_BORDER_RADIUS } from './constant';

export const Choices = () => {
  const { id } = useParams() as { id: string };
  const nfts = useAppSelector((state) => state.nfts);
  const { address } = useAccount();
  const { loading, data } = useGetPollByIdQuery({ variables: { id } });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [choice, setChoice] = useState<Nullable<ChoiceType>>(null);
  const [vote, { loading: voteLoading, error: voteError }] = useVoteMutation();
  const toast = useToast();
  const isLocked = Boolean(data?.poll?.gate && !isHolder(nfts, data.poll.gate));

  if (loading) return <Spinner />;
  if (!data || !data.poll) return <>Error</>;

  const alreadyVoted = haveAlreadyVote(data.poll.voters, address);

  const handleClickOnChoice = (choice: ChoiceType) => {
    setChoice(choice);
    onOpen();
  };

  const handleVote = async (choiceId: string) => {
    await vote({
      variables: { choiceId, pollId: id, voters: [address] },
      update: updateCacheAfterVote,
    });

    if (voteError) {
      toast({
        title: 'An Error occured',
        status: 'error',
        duration: 2000,
        description: 'Try again later or contact us to report the issue',
      });
    } else {
      toast({
        title: 'You voted successfully',
        status: 'success',
        duration: 2000,
      });
    }
  };

  return (
    <>
      <Box height="100%" display="flex" flexDir="column">
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={2}
            background="rgba(0, 0, 0, 0.69)"
            padding={8}
            borderRadius={CHOICE_CARD_BORDER_RADIUS}
          >
            <Text color="white" fontWeight="bold" textAlign="center">
              {data.poll.title}
            </Text>
          </Box>
          <Image isLocked={isLocked} src={data.poll.image || undefined} />
        </Box>
        <Box flex={1} display="flex" justifyContent="center" alignItems="center">
          {isLocked ? (
            <Heading textAlign="center" fontSize="x-large">
              Connect your wallet with Human Divergence NFT to vote
            </Heading>
          ) : (
            <Flex gap={2} justifyContent="space-between" flexWrap="wrap">
              {data.poll.choices.map((choice) => (
                <ChoiceCard
                  key={`choice-${choice.id}`}
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

      <VoteModal
        loading={voteLoading}
        isOpen={isOpen}
        onClose={onClose}
        choice={choice}
        handleVote={handleVote}
      />
    </>
  );
};
