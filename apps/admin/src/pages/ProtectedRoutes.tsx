import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import type { Nullable } from 'types';
import { Spinner } from 'ui';
import { useCustomerTokenCookie } from '../useCustomerTokenCookie';

export const ProtectedRoutes = () => {
  const { tokenCookie } = useCustomerTokenCookie();
  const [authenticated, setAuthenticated] = useState<Nullable<boolean>>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function verifyToken(token: string) {
      setLoading(true);
      const res = await axios.get<{ token: string | null }>(
        `${process.env.FUNCTIONS_API}/api/admin/auth/verify`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
      setLoading(false);
      setAuthenticated(res.status === 204 ? true : false);
    }

    verifyToken(tokenCookie);
  }, [tokenCookie]);

  if (loading || authenticated === null) return <Spinner />;

  if (authenticated === false) return <Navigate to="/" />;

  return (
    <div>
      <Outlet />
    </div>
  );
};
