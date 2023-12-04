import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import Cookies from 'js-cookie';
import { envVars } from '@3shop/config';
const CUSTOMER_TOKEN_NAME = 'customer-token';
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
    if (networkError)
        console.log(`[Network error]: ${networkError}`);
});
const httpLink = new HttpLink({
    uri: envVars.PUBLIC_HASURA_API_URL,
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
});
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = Cookies.get(CUSTOMER_TOKEN_NAME);
    // return the headers to the context so httpLink can read them
    return {
        headers: Object.assign(Object.assign({}, headers), { authorization: token ? `Bearer ${token}` : '' }),
    };
});
const serverLink = setContext((_, { headers }) => ({
    headers: Object.assign(Object.assign({}, headers), { 'x-hasura-admin-secret': envVars.SECRET_HASURA }),
}));
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
export function createServerClient() {
    return new ApolloClient({
        link: from([errorLink, serverLink]),
        cache: new InMemoryCache({
            typePolicies: {},
        }),
    });
}
