import { Outlet } from 'react-router-dom';
import { SidebarWithHeader, Spinner } from '@3shop/ui';
import { useVerifyToken } from '../useVerifyToken';

export const ProtectedRoutes = () => {
  const { loading } = useVerifyToken(true);

  return <SidebarWithHeader>{loading ? <Spinner /> : <Outlet />}</SidebarWithHeader>;
};
