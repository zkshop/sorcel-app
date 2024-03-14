import { Outlet, useNavigate } from 'react-router-dom';
import { SidebarWithHeader, Spinner } from '@3shop/ui';
import { useVerifyToken } from '../useVerifyToken';
import { removeCustomerTokenCookie } from '../useCustomerTokenCookie';
import { networkDialog } from '../modules/Dialog/firstConnection';
import { useMemo, useState } from 'react';
import { Dialogs, dialog } from '@3shop/ui/Modal/Dialogs';
import useUserSettings from '../hooks/useUserSettings';

export const ProtectedRoutes = () => {
  const { loading, user, email } = useVerifyToken(true);
  const [get, , settingsLoading] = useUserSettings();
  const navigate = useNavigate();

  function signOut() {
    removeCustomerTokenCookie();
    navigate('/');
  }

  const firstConnectionDialogs = useMemo<dialog[]>(() => {
    if (settingsLoading)
      return [];
    const userSettings = get();
    if (userSettings && userSettings.network)
      return [];
    return [networkDialog];
  }, [settingsLoading]);

  return (
    <>
      <Dialogs lastModalNextText='Dive In'>
        {firstConnectionDialogs}
      </Dialogs>
      <SidebarWithHeader email={email} user={user} signOut={signOut}>
        {loading ? <Spinner /> : <Outlet />}
      </SidebarWithHeader>
    </>
  );
};
