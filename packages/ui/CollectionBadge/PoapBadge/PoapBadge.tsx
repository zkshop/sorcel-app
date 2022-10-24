import { Box, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';

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
        layout="fill"
        style={{
          borderRadius: '50%',
          // boxShadow: '2px 2px 2px 1px rgb(0 0 0 / 29%)',
          overflow: 'none',
        }}
        loading="lazy"
      />
    </Box>
  );
};
