import { useGetAdminAppQuery } from '@3shop/apollo';
import { Settings } from './Settings';
import { Spinner } from '@3shop/ui';

export const SettingsContainer = () => {
  const { data, loading, error } = useGetAdminAppQuery();

  if (loading) return <Spinner />;
  if (error || !data?.app || !data.app[0]) return <div>Error</div>;

  return <Settings app={data.app[0]} />;
};
