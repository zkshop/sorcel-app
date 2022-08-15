import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.HASURA_API_URL,
  cache: new InMemoryCache(),
  ssrMode: true,
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_API_KEY || "",
  },
});

export default client;
