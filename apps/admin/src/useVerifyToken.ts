import { envVars } from '@3shop/config';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomerTokenCookie } from './useCustomerTokenCookie';
import { ROUTES_PATH } from './routes/Routes';
import type { Nullable } from '@3shop/types';
import { useTokenValidity } from './context';

type UserData = Nullable<{ email: string; appId: string }>;

export const useVerifyToken = (fromAdminRoute = false) => {
  const { tokenCookie } = useCustomerTokenCookie();
  const [user, setUser] = useState<UserData>(null);
  const [loading, setLoading] = useState(false);
  const { isValid, setValidity } = useTokenValidity();

  const navigate = useNavigate();

  useEffect(() => {
    async function verifyToken(token: string) {
      setLoading(true);

      try {
        if (!tokenCookie) throw new Error();

        const user = await axios.get<UserData>(
          `${envVars.PUBLIC_FUNCTIONS_URL}/api/admin/auth/verify`,
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          },
        );

        setUser(user.data);

        setValidity(true);
        setLoading(false);

        if (!fromAdminRoute) navigate(ROUTES_PATH.PROTECTED.GENERAL);
      } catch (error) {
        console.error(error);
        if (fromAdminRoute) navigate(ROUTES_PATH.PUBLIC.LOGIN);
      }
    }

    if (!isValid) {
      verifyToken(tokenCookie);
    }
  }, [fromAdminRoute, navigate, tokenCookie]);

  return { loading, user };
};
