import { COOKIE_ENUM, CookieService } from "@3shop/domains";
import { CookieManagerClient } from '@3shop/admin-infra';
import { useGetAdminAppQuery } from "@3shop/apollo";
import { useCallback, useState } from "react";

export enum Network_standard {
  EVM = "EVM",
  Xrpledger = 'XRP Ledger',
}

interface settings {
  network: Network_standard
}

const SETTINGS_COOKIE_NAME = 'user-settings';

const useUserSettings = (): [() => settings | null, (newSettings: settings) => void, boolean, boolean] => {
  const Cookies = CookieService(CookieManagerClient());
  const { data, loading } = useGetAdminAppQuery();

  const getSettings = useCallback((): settings | null => {
    if (loading) return null;
    const settingsString = Cookies.get(`${SETTINGS_COOKIE_NAME}_${data?.app[0].id}` as COOKIE_ENUM);
    if (settingsString) {
      try {
        return JSON.parse(settingsString);
      } catch (error) {
        console.error('Failed to parse user settings from cookie', error);
        return null;
      }
    }
    return null;
  }, [loading, data?.app, Cookies]);

  const saveSettings = useCallback((newSettings: settings) => {
    if (loading) return;
    try {
      const settingsString = JSON.stringify(newSettings);
      Cookies.set(`${SETTINGS_COOKIE_NAME}_${data?.app[0].id}` as COOKIE_ENUM, settingsString);
    } catch (error) {
      console.error('Failed to save user settings to cookie', error);
    }
  }, [loading, data?.app, Cookies]);

  return [getSettings, saveSettings, loading];
};

export default useUserSettings;
export type { settings as userSettings};