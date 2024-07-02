import { Flex } from '@chakra-ui/react';

import { CartProductMeta } from '../CartProductMeta/CartProductMeta';
import { PriceTag } from '../PriceTag/PriceTag';

type CartItemProps = {
  name: string;
  description: string;
  price: number;
  priceNode?: JSX.Element | undefined;
  currency: string;
  imageUrl: string;
};

export interface cryptoPrice {
  currency: string;
  value: string;
}

export const CartItem = (props: CartItemProps) => {
  const { name, description, imageUrl, currency, price, priceNode } = props;

  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <CartProductMeta name={name} description={description} image={imageUrl} />

      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }} flex={1}>
        {(priceNode && priceNode) || <PriceTag price={price} currency={currency} />}
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        {(priceNode && priceNode) || <PriceTag price={price} currency={currency} />}
      </Flex>
    </Flex>
  );
};
