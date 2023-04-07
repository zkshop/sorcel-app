import { classnames } from '@3shop/config';
import { Box } from '@chakra-ui/react';
import { Text } from '../Text/Text';

type LockedLayerProps = {
  collectionName?: string;
  size?: 'md' | 'lg';
  text?: string;
};

export const LockedLayer = ({ size = 'md', text = 'Connect your wallet' }: LockedLayerProps) => (
  <>
    <Box
      className={classnames.LOCKED_LAYER}
      zIndex={0}
      position="absolute"
      top={0}
      left={0}
      bottom={0}
      right={0}
      bg="black"
      opacity={0.5}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    />

    <Box zIndex={1} position="absolute" display="flex" top={0} left={0} right={0} bottom={0}>
      <Text
        className={classnames.LOCKED_LAYER_TEXT}
        textAlign="center"
        fontWeight="bold"
        margin="auto"
        color="white"
        fontSize={size === 'lg' ? '2xl' : 'lg'}
      >
        {text}
      </Text>
    </Box>
  </>
);
