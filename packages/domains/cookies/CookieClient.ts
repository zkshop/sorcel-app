export type COOKIE_ENUM = 'customer-token' | 'user-settings';

export type CookieClient = {
  set(name: COOKIE_ENUM, value: string): void;
  remove(name: COOKIE_ENUM): void;
  get(name: COOKIE_ENUM): string;
};
