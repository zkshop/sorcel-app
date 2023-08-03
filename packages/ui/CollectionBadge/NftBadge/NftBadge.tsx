import { Box, Image, useMediaQuery } from '@chakra-ui/react';

type NftBadgeProps = {
  imgUrl: string;
};

const sizeToBoxSize = {
  sm: 50,
  md: 70,
  lg: 100,
};

export const NftBadge = ({ imgUrl }: NftBadgeProps) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const boxSize = sizeToBoxSize[isLargerThan768 ? 'md' : 'sm'];

  return (
    <Box
      sx={{
        zIndex: 2,
        position: 'absolute',
        top: Math.round(-boxSize / 3),
        right: Math.round(-boxSize / 3) * Math.round(boxSize / 2.5),
        transition: 'width 2s, height 2s, background-color 2s, transform 3s',
      }}
      width={boxSize}
      height={boxSize}
    >
      <Image src={imgUrl} alt="poap" h={50} />
    </Box>
  );
};
