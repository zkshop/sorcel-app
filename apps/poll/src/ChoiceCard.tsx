import {
  VStack,
  Box,
  Image,
  Text,
  Button,
  ApprovalIcon,
  Stat,
  StatLabel,
  StatNumber,
} from '@3shop/ui';

type ChoiceCardType = {
  title: string;
  id: string;
  handleClickOnChoice(id: string): void;
  votes: number;
  alreadyVoted: boolean;
};

export const ChoiceCard = ({
  title,
  id,
  handleClickOnChoice,
  votes,
  alreadyVoted,
}: ChoiceCardType) => (
  <VStack border="solid 1px" padding={2}>
    <Image src="/poll_image.jpeg" />
    <Box>
      <Text>{title}</Text>
    </Box>
    {alreadyVoted ? (
      <Stat>
        <StatLabel>Votes</StatLabel>
        <StatNumber>{votes}</StatNumber>
      </Stat>
    ) : (
      <Button display="flex" onClick={() => handleClickOnChoice(id)} justifyContent="space-between">
        <Text marginRight={2}>Vote</Text>
        <ApprovalIcon />
      </Button>
    )}
  </VStack>
);
