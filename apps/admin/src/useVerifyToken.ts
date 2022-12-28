import { envVars } from '@3shop/config';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomerTokenCookie } from './useCustomerTokenCookie';

export const useVerifyToken = (fromAdminRoute = false) => {
  const { tokenCookie } = useCustomerTokenCookie();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function verifyToken(token: string) {
      setLoading(true);

      try {
        if (!tokenCookie) throw new Error();

        await axios.get<{ token: string | null }>(
          `${envVars.PUBLIC_FUNCTIONS_URL}/api/admin/auth/verify`,
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          },
        );
        setLoading(false);

        if (!fromAdminRoute) navigate('/app');
      } catch (error) {
        console.error(error);
        if (fromAdminRoute) navigate('/');
      }
    }

    verifyToken(tokenCookie);
  }, [fromAdminRoute, navigate, tokenCookie]);

  return { loading };
};
