import { CookieManagerClient } from '@3shop/admin-infra';
import { CookieService } from '@3shop/domains';

export const CUSTOMER_TOKEN_NAME = 'customer-token';

const Cookies = CookieService(CookieManagerClient());

export const useCustomerTokenCookie = () => {
  const setCustomerTokenCookie = (token: string) => {
    Cookies.set(CUSTOMER_TOKEN_NAME, token);
  };

  const removeCustomerTokenCookie = () => {
    Cookies.remove(CUSTOMER_TOKEN_NAME);
  };

  const tokenCookie = Cookies.get(CUSTOMER_TOKEN_NAME);

  return { tokenCookie, setCustomerTokenCookie, removeCustomerTokenCookie };
};