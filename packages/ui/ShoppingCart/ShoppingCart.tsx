import { Stack } from '@chakra-ui/react';

import { CartItem } from '../CartItem/CartItem';
import { Heading } from '../Heading/Heading';

import { cartData } from './_data';

// TODO: Cart data as props
export const ShoppingCart = () => (
  <Stack spacing={{ base: '8', md: '10' }} flex="2">
    <Heading fontSize="2xl" fontWeight="extrabold">
      Shopping Cart (3 items)
    </Heading>

    <Stack spacing="6">
      {cartData.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </Stack>
  </Stack>
);
