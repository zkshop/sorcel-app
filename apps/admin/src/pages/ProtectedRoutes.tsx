import { Outlet } from 'react-router-dom';
import { Spinner } from 'ui';
import { useVerifyToken } from '../useVerifyToken';

export const ProtectedRoutes = () => {
  const { loading } = useVerifyToken(true);

  if (loading) return <Spinner />;

  return (
    <div>
      <Outlet />
    </div>
  );
};
