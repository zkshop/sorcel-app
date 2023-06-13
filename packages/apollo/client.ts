import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import Cookies from 'js-cookie';
import { envVars } from '@3shop/config';
// import nodeFetch from 'node-fetch';

const CUSTOMER_TOKEN_NAME = 'customer-token';
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: envVars.PUBLIC_HASURA_API_URL, // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
});

// const backendHttpLink = new HttpLink({
//   uri: envVars.PUBLIC_HASURA_API_URL, // Server URL (must be absolute)
//   credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
//   fetch: nodeFetch as any,
// });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get(CUSTOMER_TOKEN_NAME);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const shopHttpLink = new HttpLink({
  uri: envVars.PUBLIC_HASURA_API_URL,
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

export function addApolloState(client: any, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}
