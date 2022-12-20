import { Box, Stack, Text, useColorModeValue as mode, Image } from '@chakra-ui/react';

export type CartProductMetaProps = {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  image: string;
};

export const CartProductMeta = (props: CartProductMetaProps) => {
  const { image, name, description } = props;
  return (
    <Stack direction="row" spacing="5" width="full">
      <Box rounded="lg">
        <Image w={120} h={120} src={image} alt={name} />
      </Box>

      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {description}
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};
