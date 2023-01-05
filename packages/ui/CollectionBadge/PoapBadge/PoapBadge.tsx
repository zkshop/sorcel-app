import { Box, useMediaQuery, Image } from '@chakra-ui/react';

type PoapBadgeProps = {
  imgUrl: string;
  href?: string;
};

const sizeToBoxSize = {
  sm: 50,
  md: 70,
  lg: 100,
};

export const PoapBadge = ({ imgUrl }: PoapBadgeProps) => {
  // TODO: use UseBreakpointValue hook here
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const boxSize = sizeToBoxSize[isLargerThan768 ? 'md' : 'sm'];

  return (
    <Box
      sx={{
        zIndex: 2,
        position: 'absolute',
        top: Math.round(-boxSize / 3),
        right: Math.round(-boxSize / 3),
        transition: 'width 2s, height 2s, background-color 2s, transform 3s',
      }}
      width={boxSize}
      height={boxSize}
    >
      <Image
        src={imgUrl}
        alt="poap"
        w="100%"
        h="100%"
        style={{
          borderRadius: '50%',
          overflow: 'none',
        }}
      />
    </Box>
  );
};
