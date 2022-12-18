import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Spinner } from 'ui';
import { useCustomerTokenCookie } from '../useCustomerTokenCookie';

export const ProtectedRoutes = () => {
  const { tokenCookie } = useCustomerTokenCookie();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function verifyToken(token: string) {
      setLoading(true);
      try {
        await axios.get<{ token: string | null }>(
          `${process.env.FUNCTIONS_API}/api/admin/auth/verify`,
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          },
        );
        setLoading(false);
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    }

    verifyToken(tokenCookie);
  }, [navigate, tokenCookie]);

  if (loading) return <Spinner />;

  return (
    <div>
      <Outlet />
    </div>
  );
};
