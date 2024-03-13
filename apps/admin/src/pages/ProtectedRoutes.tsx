import { Outlet, useNavigate } from 'react-router-dom';
import { SidebarWithHeader, Spinner, useToastMessage } from '@3shop/ui';
import { useVerifyToken } from '../useVerifyToken';
import { removeCustomerTokenCookie } from '../useCustomerTokenCookie';
import { CustomerAuthClient } from '@3shop/admin-infra';
import { AuthAdminService } from '@3shop/domains';
const auth = AuthAdminService(CustomerAuthClient());

export const ProtectedRoutes = () => {
  const { loading, user, email } = useVerifyToken(true);
  const toast = useToastMessage();
  const navigate = useNavigate();

  function signOut() {
    (async () => {
      try {
        await auth.logout().then(() => {
          removeCustomerTokenCookie();
          navigate('/');
        });
      } catch (e) {
        toast.error('We failed to sign you out. Please try again or contact support.');
        console.error('Logout error:', e);
      }
    })();
  }

  return (
    <SidebarWithHeader email={email} user={user} signOut={signOut}>
      {loading ? <Spinner /> : <Outlet />}
    </SidebarWithHeader>
  );
};
