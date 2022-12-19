import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomerTokenCookie } from './useCustomerTokenCookie';

export const useVerifyToken = (fromAdminRoute = false) => {
  const { tokenCookie, setCustomerTokenCookie } = useCustomerTokenCookie();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function verifyToken(token: string) {
      setLoading(true);

      try {
        if (!tokenCookie) throw new Error();

        await axios.get<{ token: string | null }>(
          `${process.env.FUNCTIONS_API}/api/admin/auth/verify`,
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
