import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import Cookies from 'js-cookie';

const CUSTOMER_TOKEN_NAME = 'customer-token';

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
  try {
    console.log(`Operation Name: ${operation.operationName}`);
    console.log(`Variables: ${JSON.stringify(operation.variables)}`);
    console.log(`Extensions: ${JSON.stringify(operation.extensions)}`);
    console.log(`Query: ${operation.query.loc && operation.query.loc.source.body}`);
  } catch (e) {
    console.warn("errorLink log error");
  }
});

const httpLink = new HttpLink({
  uri: process.env.PUBLIC_HASURA_API_URL, // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get(CUSTOMER_TOKEN_NAME);
  // return the headers to the context so httpLink can read them
  if (token) return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
  return { headers };
});

const serverLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    'x-hasura-admin-secret': process.env.SECRET_HASURA,
  },
}));

const shopHttpLink = new HttpLink({
  uri: process.env.PUBLIC_HASURA_API_URL,
  credentials: 'same-origin',
  headers: {},
});

export function createApolloClient() {
  return new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {},
    }),
  });
}

export function createApolloShopClient() {
  return new ApolloClient({
    link: from([errorLink, shopHttpLink]),
    cache: new InMemoryCache({
      typePolicies: {},
    }),
  });
}

export function createServerClient() {
  return new ApolloClient({
    link: from([errorLink, serverLink]),
    cache: new InMemoryCache({
      typePolicies: {},
    }),
  });
}
