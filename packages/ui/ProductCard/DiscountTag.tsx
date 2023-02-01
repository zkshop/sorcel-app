import { classnames } from '@3shop/config';
import { Box, Text } from '@chakra-ui/react';

type DiscountTagProps = {
  discount: number;
};
export const DiscountTag = ({ discount }: DiscountTagProps) => (
  <Box
    className={classnames.PRODUCT_CARD.DISCOUNT_TAG_CONTAINER}
    position="absolute"
    top="16px"
    left={0}
    py={0.5}
    px={1}
    bg="white"
    color="red"
    letterSpacing={0.8}
    lineHeight="16px"
  >
    <Text className={classnames.PRODUCT_CARD.DISCOUNT_TAG_TEXT} fontSize="12px" p={0.5}>
      {`-${discount}%`}
    </Text>
  </Box>
);
