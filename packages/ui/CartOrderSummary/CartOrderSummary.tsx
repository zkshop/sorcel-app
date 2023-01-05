import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '../Icons';

import { formatPrice } from '../PriceTag/PriceTag';

type CartOrderSummaryProps = {
  amount: number;
  isDisabled: boolean;
};

export const CartOrderSummary = ({ amount, isDisabled }: CartOrderSummaryProps) => (
  <Stack
    spacing="8"
    rounded="lg"
    width="full"
    sx={{
      bg: 'white',
      p: 8,
      border: '1px solid lightgrey',
    }}
  >
    <Heading size="md">Order Summary</Heading>

    <Stack spacing="6">
      <Flex justify="space-between">
        <Text fontSize="lg" fontWeight="semibold">
          Total
        </Text>
        <Text fontSize="xl" fontWeight="extrabold">
          {formatPrice(amount)}
        </Text>
      </Flex>
    </Stack>

    <Button
      colorScheme="blue"
      size="lg"
      fontSize="md"
      rightIcon={<ArrowRightIcon />}
      isDisabled={isDisabled}
      type="submit"
    >
      {amount ? 'Checkout' : 'Get for free'}
    </Button>
  </Stack>
);
