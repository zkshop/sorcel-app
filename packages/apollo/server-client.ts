import { GraphQLClient } from 'graphql-request';
import { getSdk } from './server-generated';

export const gqlClient = new GraphQLClient(process.env.PUBLIC_HASURA_API_URL || '');

export const get = getSdk(gqlClient);

export const gqlRequestClient = {
  get: getSdk(gqlClient),
};
