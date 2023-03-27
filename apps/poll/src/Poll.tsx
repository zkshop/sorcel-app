import { Image, Box, VStack, Text } from '@3shop/ui';

type PollType = {
  id: string;
  title: string;
  image?: string;
};

export const Poll = ({ id, title, image }: PollType) => (
  <VStack>
    <Image src="/poll_image.jpeg" />
    <Box>
      <Text>{title}</Text>
    </Box>
  </VStack>
);
