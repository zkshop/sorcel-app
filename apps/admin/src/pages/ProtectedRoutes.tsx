import { Outlet, useNavigate } from 'react-router-dom';
import { SidebarWithHeader, Spinner, useToastMessage } from '@3shop/ui';
import { useVerifyToken } from '../useVerifyToken';
import { removeCustomerTokenCookie } from '../useCustomerTokenCookie';
import { CustomerAuthClient } from '@3shop/admin-infra';
import { AuthAdminService } from '@3shop/domains';
import type { dialog } from '@3shop/ui/Modal/Dialogs';
import { Dialogs } from '@3shop/ui/Modal/Dialogs';
import { useMemo } from 'react';
import { networkDialog } from '../modules/Dialog/firstConnection';
import useUserSettings from '../hooks/useUserSettings';
import React from 'react';

const auth = AuthAdminService(CustomerAuthClient());

export const ProtectedRoutes = () => {
  const { loading, user, email } = useVerifyToken(true);
  const toast = useToastMessage();
  const [get, , settingsLoading] = useUserSettings();
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

  const firstConnectionDialogs = useMemo<dialog[]>(() => {
    if (settingsLoading) return [];
    const userSettings = get();
    if (userSettings && userSettings.network) return [];
    return [networkDialog];
  }, [settingsLoading]);

  return (
    <>
      <Dialogs lastModalNextText="Dive In">{firstConnectionDialogs}</Dialogs>
      <SidebarWithHeader email={email} user={user} signOut={signOut}>
        {loading ? <Spinner /> : <Outlet />}
      </SidebarWithHeader>
    </>
  );
};
