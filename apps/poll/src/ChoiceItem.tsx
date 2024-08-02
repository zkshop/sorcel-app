import { Box, Text, Stat, StatLabel, StatNumber, Flex } from '@3shop/ui';
import { ChoiceCard } from './ChoiceCard';
import type { ChoiceType } from './utils';
import { VoteButton } from './VoteButton';

type ChoiceItemType = {
  title: string;
  id: string;
  handleClickOnChoice(choice: ChoiceType): void;
  votes: number;
  alreadyVoted: boolean;
  completed: boolean;
};

export const ChoiceItem = ({
  id,
  title,
  handleClickOnChoice,
  votes,
  alreadyVoted,
  completed,
}: ChoiceItemType) => (
  <ChoiceCard>
    <Flex p={15} alignItems="center" justifyContent="center" flexDirection="column">
      <Text textAlign="center" color="white">
        {title}
      </Text>
      <Box mt={2}>
        {alreadyVoted || completed ? (
          <Stat textAlign="center">
            <StatLabel>Votes</StatLabel>
            <StatNumber>{votes}</StatNumber>
          </Stat>
        ) : (
          <VoteButton
            display="flex"
            textAlign="center"
            onClick={() => handleClickOnChoice({ count: votes, value: title, id })}
            justifyContent="space-between"
          >
            Vote
          </VoteButton>
        )}
      </Box>
    </Flex>
  </ChoiceCard>
);
