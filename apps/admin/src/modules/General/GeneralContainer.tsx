import { useGetAppQuery } from 'apollo';
import { General } from './General';
import { Spinner } from 'ui';

export const GeneralContainer = () => {
  const { data, loading, error } = useGetAppQuery({
    variables: { appId: '7c0623b1-5715-4e77-8db3-cf71204bdb80' },
  });

  if (loading) return <Spinner />;
  if (error || !data?.app) return <div>Error</div>;

  return <General app={data.app} />;
};
