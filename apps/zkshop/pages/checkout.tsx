import { Box } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

import { formatAmountForStripe } from "../clients/stripe/helpers";
import { CheckoutForm } from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51IKmYzFoww6uficXIeMaweCQ90YNSJayTLBoeUxNbHBQ0nm8UZ5PnnDsNjpmj48ax9lKBzNtUmmpwjywBepb0IsB0072RMe4A9"
);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/payment-intents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: "2ce540cb-a57b-4594-9124-0afe0e7120c0",
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  console.log(clientSecret);

  return (
    <Box width={200} height={800}>
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
