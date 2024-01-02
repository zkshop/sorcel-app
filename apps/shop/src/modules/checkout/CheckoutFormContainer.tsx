import type { GetProductByIdQuery } from '@3shop/apollo';
import { usePushClaimsMutation } from '@3shop/apollo';
import { useCreateOrderMutation } from '@3shop/apollo';
import { VStack, Heading, Spinner } from '@3shop/ui';
import { Elements } from '@stripe/react-stripe-js';
import { getStripeObject, getPaymentIntent } from '@/clients/stripe';
import { useState, useEffect } from 'react';
import { CheckoutForm } from './CheckoutForm/CheckoutForm';
import { useAppSelector } from '@3shop/store';
import { Navigate } from 'react-router-dom';
import { envVars } from '@3shop/config';
import { sendOrderConfirmation } from '@3shop/email';

const stripe = getStripeObject();

type CheckoutFormContainerProps = {
  product: GetProductByIdQuery['product'];
};

export const CheckoutFormContainer = ({ product }: CheckoutFormContainerProps) => {
  if (!product) return null;

  const [isPaymentIntentLoading, setIsPaymentIntentLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const order = useAppSelector((state) => state.user.order);
  const [createOrder] = useCreateOrderMutation();
  const [pushClaims] = usePushClaimsMutation();

  useEffect(() => {
    async function updateClientSecret() {
      if (!order) return;
      setIsPaymentIntentLoading(true);
      const clientSecret = await getPaymentIntent(order.amount, product?.app.moneyAccountId || '');
      setClientSecret(clientSecret);
      setIsPaymentIntentLoading(false);
    }

    updateClientSecret();
  }, [order, product.app.moneyAccountId, product.id]);

  async function handlePaymentSuccess() {
    if (!order || !product) return;
    const { gateId, claims, ...rest } = order;

    await createOrder({
      variables: {
        ...rest,
        product_id: product?.id,
        app_id: envVars.APP_ID,
      },
    });

    sendOrderConfirmation(order.email, {
      shop_logo_url: product.app?.imgUrl || '',
      name: order.firstname,
      product_name: product.name,
      shop_name: product.app.name,
      price: order.amount,
      img_url: product.image,
    });

    if (gateId) {
      await pushClaims({
        variables: {
          gate_id: gateId,
          claims: claims as string,
        },
      });
    }
  }

  if (!order) return <Navigate to="/" />;

  return (
    <VStack justifyContent="center">
      <Heading as="h2" py={4}>
        Checkout
      </Heading>
      {isPaymentIntentLoading && <Spinner />}
      {clientSecret && (
        <Elements options={{ appearance: { theme: 'stripe' }, clientSecret }} stripe={stripe}>
          <CheckoutForm handlePaymentSuccess={handlePaymentSuccess} price={order.amount} />
        </Elements>
      )}
    </VStack>
  );
};
