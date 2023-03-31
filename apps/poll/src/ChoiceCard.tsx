import { Box, Text, Stat, StatLabel, StatNumber, Flex } from '@3shop/ui';
import { Card } from './Card';
import { VoteButton } from './VoteButton';

type ChoiceCardType = {
  title: string;
  id: string;
  handleClickOnChoice(id: string): void;
  votes: number;
  alreadyVoted: boolean;
};

export const ChoiceCard = ({
  title,

  handleClickOnChoice,
  votes,
  alreadyVoted,
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
            onClick={() => handleClickOnChoice(title)}
            justifyContent="space-between"
          >
            Vote
          </VoteButton>
        )}
      </Box>
    </Flex>
  </Card>
);
