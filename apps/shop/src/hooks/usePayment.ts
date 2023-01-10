import { useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const messages = {
  succeeded: 'Payment succeeded!',
  processing: 'Your payment is processing.',
  requires_payment_method: 'Your payment was not successful, please try again.',
  canceled: 'Your payment was canceled.',
  requires_action: '',
  requires_capture: '',
  requires_confirmation: '',
  default: 'An unexpected error occurred.',
} as const;

const getPaymentMessage = (status?: keyof typeof messages) =>
  status ? messages[status] : messages.default;

export const usePayment = (paymentCallback: () => Promise<void>) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMessage, setPaymentMessage] = useState<string | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret',
    );

    async function retrievePayment() {
      if (!stripe || !clientSecret) return;

      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

      setPaymentMessage(getPaymentMessage(paymentIntent?.status));
    }

    retrievePayment();
  }, [stripe]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {},
      redirect: 'if_required',
    });

    if (error?.type === 'card_error' || error?.type === 'validation_error') {
      setPaymentMessage(error?.message);
    } else {
      setPaymentMessage('An unexpected error occurred.');
    }

    if (paymentIntent?.status === 'succeeded') {
      await paymentCallback();
      navigate('/success');
    }
  };

  return { handleSubmit, paymentMessage, stripe, elements };
};
