import { GraphQLClient } from 'graphql-request';
import { getSdk } from './server-generated';
import { envVars } from '@3shop/config';

export const gqlClient = new GraphQLClient(envVars.PUBLIC_HASURA_API_URL || '');

export const get = getSdk(gqlClient);

export const gqlRequestClient = {
  get: getSdk(gqlClient),
};
