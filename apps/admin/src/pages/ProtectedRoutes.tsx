import { Outlet, useNavigate } from 'react-router-dom';
import { SidebarWithHeader, Spinner } from '@3shop/ui';
import { useVerifyToken } from '../useVerifyToken';
import { removeCustomerTokenCookie } from '../useCustomerTokenCookie';

export const ProtectedRoutes = () => {
  const { loading, user, email } = useVerifyToken(true);
  const navigate = useNavigate();

  function signOut() {
    removeCustomerTokenCookie();
    navigate('/');
  }

  return (
    <SidebarWithHeader email={email} user={user} signOut={signOut}>
      {loading ? <Spinner /> : <Outlet />}
    </SidebarWithHeader>
  );
};
