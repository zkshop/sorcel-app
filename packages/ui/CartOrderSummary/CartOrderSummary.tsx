import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
// TODO: Remove Chakra/icons

import { formatPrice } from "../PriceTag/PriceTag";

type OrderSummaryItemProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
};

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;

  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

type CartOrderSummaryProps = {
  price: number;
};

export const CartOrderSummary = ({ price }: CartOrderSummaryProps) => (
  <Stack
    spacing="8"
    rounded="lg"
    width="full"
    sx={{
      bg: "white",
      p: 8,
      border: "1px solid lightgrey",
    }}
  >
    <Heading size="md">Order Summary</Heading>

    <Stack spacing="6">
      <OrderSummaryItem label="Subtotal" value={formatPrice(price)} />
      <OrderSummaryItem label="Shipping + Tax">
        <Link href="#" textDecor="underline">
          Calculate shipping
        </Link>
      </OrderSummaryItem>
      {/* <OrderSummaryItem label="Coupon Code">
        <Link href="#" textDecor="underline">
          Add coupon code
        </Link>
      </OrderSummaryItem> */}
      <Flex justify="space-between">
        <Text fontSize="lg" fontWeight="semibold">
          Total
        </Text>
        <Text fontSize="xl" fontWeight="extrabold">
          {formatPrice(price)}
        </Text>
      </Flex>
    </Stack>

    <Button
      colorScheme="blue"
      size="lg"
      fontSize="md"
      rightIcon={<FaArrowRight />}
      type="submit"
    >
      Checkout
    </Button>
  </Stack>
);
