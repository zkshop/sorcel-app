import { Image, Box, Text } from '@3shop/ui';
import { Card } from './Card';

type PollType = {
  id: string;
  title: string;
  image?: string;
};

export const Poll = ({ title }: PollType) => (
  <Card>
    <Image src="/choices_background.png" />
    <Box>
      <Text>{title}</Text>
    </Box>
  </Card>
);
