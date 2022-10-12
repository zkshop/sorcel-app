export type AuthTokenValidationClient = {
  validate(token: string): Promise<void>;
};
