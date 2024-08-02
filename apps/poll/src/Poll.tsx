import { Text, Flex, Box } from '@3shop/ui';
import { VoteButton } from './VoteButton';
import { PollCard } from './PollCard';
import { PollImage } from './PollImage';
import { TitleLayer } from './TitleLayer';

type PollType = {
  id: string;
  title: string;
  image?: string;
  completed: boolean;
  isLocked?: boolean;
};

export const Poll = ({ title, image, completed }: PollType) => (
  <PollCard>
    <Box position="relative">
      {completed && (
        <TitleLayer>
          <Text fontWeight="bold" color="white">
            Completed
          </Text>
        </TitleLayer>
      )}
      <PollImage completed={completed} src={image} />
    </Box>
    <Flex paddingY={2} gap={2} direction="column" justifyContent="center" alignItems="center">
      <Text textAlign="center" noOfLines={1} fontFamily="Inter" fontWeight="800">
        {title}
      </Text>
      <VoteButton>Vote</VoteButton>
    </Flex>
  </PollCard>
);
