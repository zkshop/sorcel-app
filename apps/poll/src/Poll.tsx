import { Text, Flex } from '@3shop/ui';
import { VoteButton } from './VoteButton';
import { PollCard } from './PollCard';
import { PollImage } from './PollImage';

type PollType = {
  id: string;
  title: string;
  image?: string;
};

export const Poll = ({ title, image }: PollType) => (
  <PollCard>
    <PollImage isLocked={false} src={image} />
    <Flex paddingY={2} gap={2} direction="column" justifyContent="center" alignItems="center">
      <Text textAlign="center" noOfLines={1} fontFamily="Inter" fontWeight="800">
        {title}
      </Text>
      <VoteButton>Vote</VoteButton>
    </Flex>
  </PollCard>
);
