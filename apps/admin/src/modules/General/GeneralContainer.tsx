import { useGetAppQuery } from 'apollo';
import { General } from './General';
import { Spinner } from 'ui';

export const GeneralContainer = () => {
  const { data, loading, error } = useGetAppQuery({
    variables: { appId: process.env.APP_ID },
  });

  if (loading) return <Spinner />;
  if (error || !data?.app) return <div>Error</div>;

  return <General app={data.app} />;
};
