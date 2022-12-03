import { Box, Text } from '@chakra-ui/react';

type LockedLayerProps = {
  isLocked: boolean;
  collectionName?: string;
};

export const LockedLayer = ({ isLocked, collectionName = '' }: LockedLayerProps) => {
  if (!isLocked) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          zIndex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: 0.5,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          bg: 'black',
          borderRadius: '5px',
        }}
      />

      <Text
        sx={{
          zIndex: 1,
          px: 1,
          position: 'absolute',
          top: 90,
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
          width: '100%',
        }}
        top={90}
        fontSize="lg"
      >
        Connect your {collectionName} wallet to unlock
      </Text>
    </>
  );
};
