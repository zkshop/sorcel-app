import type { App } from '@3shop/apollo';

import { SettingsForm } from './SettingsForm';

type SettingsProps = {
  app: Omit<App, 'app_wallet_connection_logs' | 'app_wallet_connection_logs_aggregate'>;
};

export const Settings = ({ app }: SettingsProps) => <SettingsForm app={app} />;
