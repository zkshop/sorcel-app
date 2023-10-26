export type QueryPayload = {
  query: any;
  variables?: object;
};

export type ApiClient = {
  query: (payload: QueryPayload) => Promise<any>;
};
