import { Heading, SimpleGrid, Stack, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { CartItem, CartOrderSummary, Section } from 'ui';

import { ShippingForm } from './ShippingForm';
import { ShippingFormValues } from './types';

import { Product } from 'libs/apollo/generated';
import { applyDiscount } from 'pure';

type ShippingFormContainerProps = {
  product: Product;
};

export const ShippingFormContainer = ({ product }: ShippingFormContainerProps) => {
  const { id, price, name, image, discount } = product;
  const methods = useForm<ShippingFormValues>();
  const { handleSubmit } = methods;
  const amount = applyDiscount(price, discount);

  const router = useRouter();

  const onSubmit = async () => {
    if (amount === 0) {
      // TODO: Send E-mail confirmation
      return router.push('/');
    }

    router.push(router.asPath.replace('shipping', 'checkout'));
  };

  const cartData = [
    {
      id,
      price: amount,
      currency: 'EUR',
      name,
      description: name,
      quantity: 1,
      imageUrl: image,
    },
  ];

  return (
    <FormProvider {...methods}>
      <Heading as="h2">Shipping Informations</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={2} spacing={4} minChildWidth="350px">
          <VStack flex={1}>
            <ShippingForm />
          </VStack>

          <VStack flex={1} justifyContent="space-between">
            {/* // TODO: Use Shopping cart component */}
            <Section>
              <Heading fontSize="2xl" fontWeight="extrabold">
                Shopping Cart (1 item)
              </Heading>

              <Stack spacing="6">
                {cartData.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </Stack>
            </Section>

            <CartOrderSummary amount={amount} />
          </VStack>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};
