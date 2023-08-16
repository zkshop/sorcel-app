import { Box, Image, useMediaQuery } from '@chakra-ui/react';

type NftBadgeProps = {
  imgUrl: string;
};

const sizeToBoxSize = {
  sm: 25,
  md: 50,
  lg: 75,
};

export const NftBadge = ({ imgUrl }: NftBadgeProps) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const boxSize = sizeToBoxSize[isLargerThan768 ? 'md' : 'sm'];

  return (
    <Box position="absolute" top={Math.round(-boxSize / 3)} right={-5} zIndex={2}>
      <Image src={imgUrl} alt="poap" h={sizeToBoxSize} />
    </Box>
  );
};
