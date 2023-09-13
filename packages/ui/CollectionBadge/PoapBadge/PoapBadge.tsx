import { Box, useMediaQuery, Image, Text } from '@chakra-ui/react';

type PoapBadgeProps = {
  imgUrl: string;
  index?: number;
  href?: string;
  addtionnalPoaps?: number;
};

const sizeToBoxSize = {
  sm: 50,
  md: 70,
  lg: 100,
};

export const PoapBadge = ({ imgUrl, index = 0, addtionnalPoaps }: PoapBadgeProps) => {
  // TODO: use UseBreakpointValue hook here
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const boxSize = sizeToBoxSize[isLargerThan768 ? 'md' : 'sm'];

  return (
    <Box
      sx={{
        zIndex: 2,
        position: 'absolute',
        top: Math.round(-boxSize / 3),
        right: Math.round(-boxSize / 3) + index * Math.round(boxSize / 2.5),
        transition: 'width 2s, height 2s, background-color 2s, transform 3s',
      }}
      width={boxSize}
      height={boxSize}
    >
      {addtionnalPoaps ? (
        <Box
          bgColor="black"
          w="70px"
          h="70"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          margin="auto"
          style={{
            borderRadius: '50%',
            overflow: 'none',
          }}
        >
          <Text fontWeight="bold" fontSize="xl">
            +3
          </Text>
        </Box>
      ) : (
        <Image
          src={imgUrl + '?size=small'}
          alt="poap"
          w="70"
          h="70"
          style={{
            borderRadius: '50%',
            overflow: 'none',
          }}
        />
      )}
    </Box>
  );
};
