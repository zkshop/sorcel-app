import { Button, Spinner, Text, cryptoPrice } from '@3shop/ui';
import { PaymentElement } from '@stripe/react-stripe-js';

import { StyledCheckoutForm } from './CheckoutForm.style';
import { usePayment } from '@/hooks/usePayment';
import { useContext, useEffect, useMemo, useState } from 'react';
import { XamanWalletContext } from '@3shop/wallet';
import { GetProductByIdQuery, useGetAppQuery } from '@3shop/apollo';
import { envVars } from '@3shop/config';

type CheckoutFormProps = {
  price: number;
  handlePaymentSuccess(): Promise<void>;
};

type CryptoCheckoutFormProps = {
  cryptoPrice: cryptoPrice,
  product: GetProductByIdQuery['product'];
  handlePaymentSuccess(): Promise<void>;
}

interface cryptoCheckoutHandler {
  onPayClick: () => void;
}

export function CryptoCheckoutForm({ cryptoPrice, product, handlePaymentSuccess }: CryptoCheckoutFormProps) {
  const [loading, setLoading] = useState(false);
  const app = useGetAppQuery({
    variables: {
      appId: envVars.APP_ID,
    },
  });
  // Xrp
  const xamanContext = useContext(XamanWalletContext);
  useEffect(() => {
  if (xamanContext?.paid && xamanContext.paid.length > 0) {
    const lastPayment = xamanContext.paid[xamanContext.paid.length - 1];
    if (lastPayment.id == product?.id) {
      // Handle payment success
      (async () => await handlePaymentSuccess())();
      xamanContext.modal.close();
    }
    // console.log('Last payment:', lastPayment);
  }
  }, [xamanContext?.paid]);
  // Handlers for every crypto currency
  const checkoutHandler = useMemo(() => {
    if (loading) return undefined;
    return new Map<string, cryptoCheckoutHandler>([
      [
        "xrp",
        {
          onPayClick: () => {
            // account address value is always passed to payload in XamanWalletProvider component.
            // only destination and amount is required here
            if (app.data?.app?.xrpWallet) {
              xamanContext?.modal.open({
                id: product?.id,
                destination: app.data?.app?.xrpWallet,
                amount: cryptoPrice.value,
              });
            }
            else {
              //TODO: handle error case xrpWallet does not exist
            }
          },
        },
      ],
    ]).get(cryptoPrice.currency);
  }, [app, loading, cryptoPrice.currency, xamanContext]);

  if (app.loading)
    return <Spinner />;

  if (!checkoutHandler) {
    //TODO: handle error no checkoutHandler found for currency
    return <>{`Error`}</>
  }

  return (
    <>
      {/* <PaymentElement id="payment-element" /> */}

      <Text fontWeight="700" py={4}>
        Price: {`${cryptoPrice.value} ${cryptoPrice.currency}`}
      </Text>
      <Button onClick={checkoutHandler.onPayClick}>{loading ? <Spinner /> : 'Pay now'}</Button>
      {/* 
      <button disabled={!stripe || !elements} id="submit">
        <span id="button-text">{loading ? <Spinner /> : 'Pay now'}</span>
      </button>

      {paymentMessage && <div id="payment-message">{paymentMessage}</div>} */}
    </>
  );
}

export function CheckoutForm({ price, handlePaymentSuccess }: CheckoutFormProps) {
  const { elements, handleSubmit, paymentMessage, stripe, loading } =
    usePayment(handlePaymentSuccess);

  return (
    <StyledCheckoutForm id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />

      <Text fontWeight="700" py={4}>
        Price: {price}€
      </Text>

      <button disabled={!stripe || !elements} id="submit">
        <span id="button-text">{loading ? <Spinner /> : 'Pay now'}</span>
      </button>

      {paymentMessage && <div id="payment-message">{paymentMessage}</div>}
    </StyledCheckoutForm>
  );
}