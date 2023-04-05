import { VoteModal } from './VoteModal';
import { useGetPollByIdQuery, useVoteMutation } from '@3shop/apollo';
import type { Nullable } from '@3shop/types';
import { Box, Flex, Spinner, useDisclosure, Heading } from '@3shop/ui';

import { useAccount } from '@3shop/wallet';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChoiceCard } from './ChoiceCard';
import { useAppSelector } from './store/store';
import type { ChoiceType } from './utils';
import { isHolder } from './utils';
import { haveAlreadyVote } from './utils/haveAlreadyVote';
import { Image } from './Image';

export const Choices = () => {
  const { id } = useParams() as { id: string };
  const nfts = useAppSelector((state) => state.nfts);
  const { address } = useAccount();
  const { loading, data } = useGetPollByIdQuery({ variables: { id } });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [choice, setChoice] = useState<Nullable<ChoiceType>>(null);
  const [vote, { loading: voteLoading }] = useVoteMutation();

  const isLocked = Boolean(data?.poll?.gate && !isHolder(nfts, data.poll.gate));

  if (loading) return <Spinner />;
  if (!data || !data.poll) return <>Error</>;

  const alreadyVoted = haveAlreadyVote(data.poll.voters, address);

  const handleClickOnChoice = (choice: ChoiceType) => {
    setChoice(choice);
    onOpen();
  };

  const handleVote = async (choiceId: string) => {
    await vote({ variables: { choiceId, pollId: id, voters: [address] } });
  };

  return (
    <>
      <Box height="100%" display="flex" flexDir="column">
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="baseline"
          position="relative"
        >
          <Image isLocked={isLocked} src={data.poll.image || undefined} />
        </Box>
        <Box flex={1} display="flex" justifyContent="center" alignItems="baseline">
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
