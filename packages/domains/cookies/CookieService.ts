import type { CookieClient, COOKIE_ENUM } from './CookieClient';

type CookieServiceType = {
  set(name: COOKIE_ENUM, value: string): void;
  remove(name: COOKIE_ENUM): void;
  get(name: COOKIE_ENUM): string;
};

export function CookieService(client: CookieClient): CookieServiceType {
  return {
    get: (name) => client.get(name),
    remove: (name) => client.remove(name),
    set: (name, value) => client.set(name, value),
  };
}
