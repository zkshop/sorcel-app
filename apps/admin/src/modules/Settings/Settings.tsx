import type { App } from '@3shop/apollo';

import { SettingsForm } from './SettingsForm';

type SettingsProps = {
  app: App;
};

export const Settings = ({ app }: SettingsProps) => <SettingsForm app={app} />;
