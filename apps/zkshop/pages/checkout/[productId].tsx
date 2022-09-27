import { Box } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { GetServerSidePropsContext } from "next";
import { useState, useEffect } from "react";

import { CheckoutForm } from "modules/checkout/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51IKmYzFoww6uficXIeMaweCQ90YNSJayTLBoeUxNbHBQ0nm8UZ5PnnDsNjpmj48ax9lKBzNtUmmpwjywBepb0IsB0072RMe4A9"
);

type CheckoutProps = {
  productId: string;
};

const Checkout = ({ productId }: CheckoutProps) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/payment-intents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [productId]);

  return (
    <Box>
      {clientSecret && (
        <Elements
          options={{ appearance: { theme: "stripe" }, clientSecret }}
          stripe={stripePromise}
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
