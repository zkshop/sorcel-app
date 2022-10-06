import { Box, Image } from '@chakra-ui/react';

type PoapBadgeProps = {
  imgUrl: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeToBoxSize = {
  sm: 50,
  md: 70,
  lg: 100,
};

export const PoapBadge = ({ imgUrl, size = 'md' }: PoapBadgeProps) => {
  const boxSize = sizeToBoxSize[size];

  return (
    <Box
      sx={{
        zIndex: 1,
        position: 'absolute',
        top: Math.round(-boxSize / 3),
        right: Math.round(-boxSize / 3),
      }}
    >
      <Image
        boxShadow="2px 2px 2px 1px rgb(0 0 0 / 29%)"
        // border="1px solid white"
        borderRadius="full"
        boxSize={boxSize}
        src={imgUrl}
        alt="poap"
      />
    </Box>
  );
};
