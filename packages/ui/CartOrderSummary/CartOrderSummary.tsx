import { Button, Flex, Link, Stack, useColorModeValue as mode } from '@chakra-ui/react';
import { Heading } from '../Heading/Heading';
import { ArrowRightIcon } from '../Icons';

import { formatPrice } from '../PriceTag/PriceTag';
import { Text } from '../Text/Text';

type CartOrderSummaryProps = {
  amount: number;
  fees?: number;
  isDisabled: boolean;
  crypto_price: string | null | undefined;
};

type OrderSummaryItemProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
};

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;

  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = ({
  crypto_price,
  amount,
  isDisabled,
  fees = 0,
}: CartOrderSummaryProps) => {
  console.log('!crypto_price', crypto_price);
  const getPriceString = () => {
    if (!crypto_price) return formatPrice(amount);
    const parsed: { value: string; currency: string } = JSON.parse(crypto_price);
    return `${parsed.value}${parsed.currency}`;
  };
  return (
    <Stack
      spacing="8"
      rounded="lg"
      width="full"
      sx={{
        p: 8,
        border: '1px solid lightgrey',
      }}
    >
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Shipping fees" value={fees.toString() + '€'}>
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {getPriceString()}
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
        {amount || crypto_price ? 'Checkout' : 'Get for free'}
      </Button>
    </Stack>
  );
};
