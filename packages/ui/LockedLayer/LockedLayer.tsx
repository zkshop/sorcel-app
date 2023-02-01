import { classnames } from '@3shop/config';
import { Box } from '@chakra-ui/react';
import { Text } from '../Text/Text';

type LockedLayerProps = {
  collectionName?: string;
  size?: 'md' | 'lg';
};

export const LockedLayer = ({ collectionName = '', size = 'md' }: LockedLayerProps) => (
  <>
    <Box
      className={classnames.LOCKED_LAYER}
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
      }}
    />

    <Text
      className={classnames.LOCKED_LAYER_TEXT}
      sx={{
        zIndex: 1,
        px: 1,
        position: 'absolute',
        top: '30%',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        width: '100%',
      }}
      fontSize={size === 'lg' ? '2xl' : 'lg'}
    >
      Connect your {collectionName} wallet to unlock
    </Text>
  </>
);
