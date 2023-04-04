import { Image, Text, Flex } from '@3shop/ui';
import { Card } from './Card';
import { VoteButton } from './VoteButton';

type PollType = {
  id: string;
  title: string;
  image?: string;
};

export const Poll = ({ title }: PollType) => (
  <Card>
    <Image src="/choices_background.png" />
    <Flex paddingY={2} gap={2} direction="column" justifyContent="center" alignItems="center">
      <Text fontFamily="Inter" fontWeight="800">
        {title}
      </Text>
      <VoteButton>Vote</VoteButton>
    </Flex>
  </Card>
);
