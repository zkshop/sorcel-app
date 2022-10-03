import { Box, Image } from '@chakra-ui/react';

type PoapBadgeProps = {
  imgUrl: string;
};

export const PoapBadge = ({ imgUrl }: PoapBadgeProps) => (
  <Box
    sx={{
      zIndex: 1,
      position: 'absolute',
      top: -3,
      right: -3,
    }}
  >
    <Image borderRadius="full" boxSize="70px" src={imgUrl} alt="poap" />
  </Box>
);
