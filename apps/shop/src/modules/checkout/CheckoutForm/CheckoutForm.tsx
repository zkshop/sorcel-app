import { Text } from '@3shop/ui';
import { PaymentElement } from '@stripe/react-stripe-js';
import { applyDiscount } from '@3shop/pure';

import { StyledCheckoutForm } from './CheckoutForm.style';
import { usePayment } from '@/hooks/usePayment';

type CheckoutFormProps = {
  price: number;
  discount?: number;
  handlePaymentSuccess(): Promise<void>;
};

export function CheckoutForm({ price, discount, handlePaymentSuccess }: CheckoutFormProps) {
  const { elements, handleSubmit, paymentMessage, stripe } = usePayment(handlePaymentSuccess);

  return (
    <StyledCheckoutForm id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />

      <Text fontWeight="700" py={4}>
        Price: {applyDiscount(price, discount)}€
      </Text>

      <button disabled={!stripe || !elements} id="submit">
        <span id="button-text">Pay now</span>
      </button>

      {paymentMessage && <div id="payment-message">{paymentMessage}</div>}
    </StyledCheckoutForm>
  );
}
