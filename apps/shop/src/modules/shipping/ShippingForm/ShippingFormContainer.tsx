import { Heading, SimpleGrid, Stack, VStack, CartItem, CartOrderSummary, Section } from '@3shop/ui';
import { FormProvider, useForm } from 'react-hook-form';

import { ShippingForm } from './ShippingForm';
import type { ShippingFormValues } from './types';

import type { Product } from '@3shop/apollo';
import { applyDiscount } from '@3shop/pure';
import { useIsAnHolder } from '@/hooks/useIsAnHolder';
import { yupResolver } from '@hookform/resolvers/yup';
import { SHIPPING_FORM_SCHEMA } from '@/schemas';
import { useLocation, useNavigate } from 'react-router-dom';

type ShippingFormContainerProps = {
  product: Product;
};

export const ShippingFormContainer = ({ product }: ShippingFormContainerProps) => {
  const { id, price, name, image, discount, curation, poapId } = product;
  const methods = useForm<ShippingFormValues>({
    mode: 'onChange',
    resolver: yupResolver(SHIPPING_FORM_SCHEMA),
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;
  const navigate = useNavigate();
  const location = useLocation();

  function showDiscount() {
    if (!curation && !poapId) return true;
    if (isAnHolder) return true;
    return false;
  }

  const isAnHolder = useIsAnHolder(product);
  const amount = applyDiscount(price, (showDiscount() && discount) || 0);

  const onSubmit = async (data: ShippingFormValues) => {
    if (amount === 0) {
      return navigate('/success');
    }

    navigate(location.pathname.replace('shipping', 'checkout'), {
      state: {
        ...data,
      },
    });
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

            <CartOrderSummary isDisabled={!isValid} amount={amount} />
          </VStack>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};
