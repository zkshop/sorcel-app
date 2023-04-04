import { Box, Text, Stat, StatLabel, StatNumber, Flex } from '@3shop/ui';
import { Card } from './Card';
import type { ChoiceType } from './utils';
import { VoteButton } from './VoteButton';

type ChoiceCardType = {
  title: string;
  id: string;
  handleClickOnChoice(choice: ChoiceType): void;
  votes: number;
  alreadyVoted: boolean;
  loading: boolean;
};

export const ChoiceCard = ({
  id,
  title,
  handleClickOnChoice,
  votes,
  alreadyVoted,
  loading,
}: ChoiceCardType) => (
  <Card>
    <Flex p={15} minW={250} alignItems="center" justifyContent="center" flexDirection="column">
      <Text textAlign="center">{title}</Text>
      <Box mt={2}>
        {alreadyVoted ? (
          <Stat textAlign="center">
            <StatLabel>Votes</StatLabel>
            <StatNumber>{votes}</StatNumber>
          </Stat>
        ) : (
          <VoteButton
            display="flex"
            onClick={() => handleClickOnChoice({ count: votes, value: title, id })}
            justifyContent="space-between"
            isDisabled={loading}
            isLoading={loading}
          >
            Vote
          </VoteButton>
        )}
      </Box>
    </Flex>
  </Card>
);
