import { useGetAdminAppQuery } from '@3shop/apollo';
import { General } from './General';
import { Spinner } from '@3shop/ui';

export const GeneralContainer = () => {
  const { data, loading, error } = useGetAdminAppQuery();

  if (loading) return <Spinner />;
  if (error || !data?.app || !data.app[0]) return <div>Error</div>;

  return <General app={data.app[0]} />;
};
