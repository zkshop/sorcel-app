import { Text } from '@3shop/ui';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { applyDiscount } from '@3shop/pure';
import React, { useEffect, useState } from 'react';

import { StyledCheckoutForm } from './CheckoutForm.style';
import { useLocation, useNavigate } from 'react-router-dom';

type CheckoutFormProps = {
  price: number;
  discount?: number;
};

export function CheckoutForm({ price, discount }: CheckoutFormProps) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret',
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {},
      redirect: 'if_required',
    });

    if (error?.type === 'card_error' || error?.type === 'validation_error') {
      setMessage(error?.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    navigate('/success', { state: { ...state, paymentStatus: paymentIntent?.status } });
    setIsLoading(false);
  };

  return (
    <StyledCheckoutForm id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />

      <Text fontWeight="700" py={4}>
        Price: {applyDiscount(price, discount)}€
      </Text>

      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </StyledCheckoutForm>
  );
}
