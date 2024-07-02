import type { cryptoPrice } from '@3shop/ui';
import { Heading, SimpleGrid, Stack, VStack, CartItem, CartOrderSummary, Section } from '@3shop/ui';
import { FormProvider, useForm } from 'react-hook-form';

import { ShippingForm } from './ShippingForm';
import type { ShippingFormValues } from './types';
import type { Gate_V2, GetProductByIdQuery } from '@3shop/apollo';
import { usePushClaimsMutation } from '@3shop/apollo';
import { useGetDeliveryZoneByAppIdQuery, useCreateOrderMutation } from '@3shop/apollo';
import { applyDiscount } from '@3shop/pure';
import { useFilteredGates } from '@/hooks/useFilteredGates';
import { yupResolver } from '@hookform/resolvers/yup';
import { SHIPPING_FORM_SCHEMA } from '@/schemas';
import { useNavigate } from 'react-router-dom';
import { storeOrder } from '@3shop/store/slices/order';
import { useDispatch } from 'react-redux';
import { envVars } from '../../../envVars';
import { get, omit } from 'lodash';
import { sendOrderConfirmation } from '@3shop/email';
import { useAccount } from '@3shop/wallet';
import { useAppSelector } from '@3shop/store';

type ShippingFormContainerProps = {
  product: GetProductByIdQuery['product'];
};

export const ShippingFormContainer = ({ product }: ShippingFormContainerProps) => {
  const { address } = useAccount();
  const cryptoPrice: cryptoPrice = product?.crypto_price ? JSON.parse(product.crypto_price) : null;
  const email = useAppSelector((state) => state.user.auth.email);
  if (!product) return null;
  const { id, price, name, image, gate } = product;

  const discount = get(gate, '[0].discount', 0);

  const { data: deliveryZoneData } = useGetDeliveryZoneByAppIdQuery({
    variables: {
      _eq: envVars.APP_ID,
    },
  });

  const [pushClaims] = usePushClaimsMutation();

  const methods = useForm<ShippingFormValues>({
    mode: 'onChange',
    resolver: yupResolver(SHIPPING_FORM_SCHEMA),
  });

  const {
    handleSubmit,
    formState: { isValid },
    watch,
  } = methods;

  const [createOrder] = useCreateOrderMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const country = watch('country');
  const fees = deliveryZoneData?.delivery_zone.find((zone) => zone.name === country)?.fees;

  function showDiscount() {
    if (activatedGates.length > 0) {
      return activatedGates[0].discount && activatedGates[0].discount > 0;
    }
    return false;
  }

  const activatedGates = useFilteredGates(product.gate as Gate_V2[]);

  const amount = applyDiscount(price + (fees || 0), showDiscount() ? Number(discount) : undefined);

  const onSubmit = async (data: ShippingFormValues) => {
    const gate = activatedGates.length ? activatedGates[0] : undefined;

    dispatch(
      storeOrder({
        ...data,
        amount,
        gateId: gate?.id,
        claims: address || email || undefined,
      }),
    );

    if (amount === 0 && !cryptoPrice) {
      try {
        await createOrder({
          variables: {
            ...omit(data, 'country'),
            product_id: id,
            app_id: envVars.APP_ID,
          },
        });

        sendOrderConfirmation(data.email, {
          shop_logo_url: product.app?.imgUrl || '',
          name: data.firstname,
          product_name: product.name,
          shop_name: product.app.name,
          price: amount,
          img_url: product.image,
        });

        if (gate) {
          await pushClaims({
            variables: {
              gate_id: gate.id,
              claims: address || (email as string),
            },
          });
        }

        return navigate('/success');
      } catch {
        return navigate('/');
      }
    }

    navigate(`/checkout/${id}`);
  };
  const priceNode = () => {
    if (product.crypto_price) {
      const parsed: { value: string; currency: string } = JSON.parse(product.crypto_price);
      return <>{`${parsed.value}${parsed.currency}`}</>;
    }
    return undefined;
  };

  return (
    <FormProvider {...methods}>
      <Heading as="h2">Shipping Informations</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={2} spacing={4} minChildWidth="350px">
          <VStack flex={1}>
            <ShippingForm />
          </VStack>

          <VStack flex={1} justifyContent="space-between">
            <Section>
              <Stack spacing="6">
                <CartItem
                  priceNode={priceNode()}
                  currency="EUR"
                  price={amount}
                  name={name}
                  description={name}
                  imageUrl={image}
                />
              </Stack>
            </Section>

            <CartOrderSummary
              fees={fees}
              isDisabled={!isValid}
              crypto_price={product.crypto_price}
              amount={amount}
            />
          </VStack>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};
