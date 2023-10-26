import type { QueryPayload } from './ApiClient';

type ApiClientServiceType = {
  query: (payload: QueryPayload) => Promise<any>;
};

export function ApiClientService(apiClient: ApiClientServiceType) {
  return {
    query: apiClient.query,
  };
}
