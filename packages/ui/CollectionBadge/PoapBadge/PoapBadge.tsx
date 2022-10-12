import { Box, Image, useMediaQuery } from '@chakra-ui/react';

type PoapBadgeProps = {
  imgUrl: string;
  href?: string;
};

const sizeToBoxSize = {
  sm: 50,
  md: 70,
  lg: 100,
};

export const PoapBadge = ({ imgUrl, href = '' }: PoapBadgeProps) => {
  // TODO: use UseBreakpointValue hook here
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const boxSize = sizeToBoxSize[isLargerThan768 ? 'md' : 'sm'];

  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      sx={{
        zIndex: 1,
        position: 'absolute',
        top: Math.round(-boxSize / 3),
        right: Math.round(-boxSize / 3),
      }}
    >
      <Image
        boxShadow="2px 2px 2px 1px rgb(0 0 0 / 29%)"
        borderRadius="full"
        boxSize={boxSize}
        src={imgUrl}
        alt="poap"
      />
    </Box>
  );
};
