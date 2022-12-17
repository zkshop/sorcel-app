import Cookies from 'js-cookie';
import type { CookieClient } from '../domains/cookies';

export const CookieManagerClient = (): CookieClient => ({
  get: (name) => Cookies.get(name) || '',
  remove: (name) => Cookies.remove(name),
  set: (name, value) => Cookies.set(name, value),
});
