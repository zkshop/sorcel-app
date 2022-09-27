import { Box } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { GetServerSidePropsContext } from "next";
import { useState, useEffect } from "react";

import { CheckoutForm } from "modules/checkout/CheckoutForm";
import { getPaymentIntent, getStripeObject } from "clients/stripe";

type CheckoutProps = {
  productId: string;
};

const stripe = getStripeObject();

const Checkout = ({ productId }: CheckoutProps) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    async function updateClientSecret() {
      const clientSecret = await getPaymentIntent(productId);
      setClientSecret(clientSecret);
    }

    updateClientSecret();
  }, [productId]);

  return (
    <Box>
      {clientSecret && (
        <Elements
          options={{ appearance: { theme: "stripe" }, clientSecret }}
          stripe={stripe}
        >
          <CheckoutForm />
        </Elements>
      )}
    </Box>
  );
};

export default Checkout;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  return { props: { productId: params?.productId } };
};
