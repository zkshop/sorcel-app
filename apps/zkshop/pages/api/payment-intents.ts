import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

import { formatAmountForStripe } from "clients/stripe";
import { initializeApollo } from "libs/apollo/client";
import {
  Product_By_PkDocument,
  Product_By_PkQuery,
  Product_By_PkQueryVariables,
} from "libs/apollo/generated";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-08-01",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    Product_By_PkQuery,
    Product_By_PkQueryVariables
  >({
    query: Product_By_PkDocument,
    variables: { id: req.body.productId },
  });

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(data.product_by_pk?.price, "eur"),
    currency: "eur",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
