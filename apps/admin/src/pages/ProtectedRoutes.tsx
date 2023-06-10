import { Outlet } from 'react-router-dom';
import { SidebarWithHeader, Spinner } from '@3shop/ui';
import { useVerifyToken } from '../useVerifyToken';
import { removeCustomerTokenCookie } from '../useCustomerTokenCookie';

export const ProtectedRoutes = () => {
  const { loading, user } = useVerifyToken(true);

  function signOut() {
    removeCustomerTokenCookie();
    window.location.href = '/';
  }

  return (
    <SidebarWithHeader user={user} signOut={signOut}>
      {loading ? <Spinner /> : <Outlet />}
    </SidebarWithHeader>
  );
};
