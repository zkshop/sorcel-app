import { Outlet } from 'react-router-dom';
import { SidebarWithHeader, Spinner } from '@3shop/ui';
import { useVerifyToken } from '../useVerifyToken';

export const ProtectedRoutes = () => {
  const { loading, user } = useVerifyToken(true);

  return <SidebarWithHeader user={user}>{loading ? <Spinner /> : <Outlet />}</SidebarWithHeader>;
};
