import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomerTokenCookie } from './useCustomerTokenCookie';
import { ROUTES_PATH } from './routes/Routes';
import type { Nullable } from '@3shop/types';
import { useTokenValidity } from './context';
import { httpServerless } from '@3shop/http-serverless';

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

        const user = await httpServerless.get<UserData>(`api/admin/auth/verify`, {
          data: {
            didToken: 'Bearer ' + token,
          },
        });

        setUser(user.data);

        setValidity(true);
        setLoading(false);

        if (!fromAdminRoute) navigate(ROUTES_PATH.PROTECTED.INTEGRATIONS);
      } catch (error) {
        if (fromAdminRoute) navigate(ROUTES_PATH.PUBLIC.LOGIN);
      }
    }

    if (!isValid) {
      verifyToken(tokenCookie);
    }
  }, [fromAdminRoute, navigate, tokenCookie]);

  return { loading, user, email: user?.email };
};
