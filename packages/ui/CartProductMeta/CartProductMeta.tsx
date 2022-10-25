import { Box, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import Image from 'next/legacy/image';

export type CartProductMetaProps = {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  image: string;
};

export const CartProductMeta = (props: CartProductMetaProps) => {
  const { isGiftWrapping = true, image, name, description } = props;
  return (
    <Stack direction="row" spacing="5" width="full">
      <Box rounded="lg">
        <Image width={120} height={120} src={image} alt={name} />
      </Box>

      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {description}
          </Text>
        </Stack>

        {/* {isGiftWrapping && (
          <HStack spacing="1" mt="3" color={mode("gray.600", "gray.400")}>
            <Icon as={GiftIcon} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        )} */}
      </Box>
    </Stack>
  );
};
