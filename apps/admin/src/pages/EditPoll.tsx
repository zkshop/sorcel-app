import { Navigate, useParams } from 'react-router-dom';
import { useGetPollByIdQuery } from '@3shop/apollo';
import { Spinner } from '@3shop/ui/Spinner';
import { EditPollFormContainer } from '../modules/Poll/EditPollFormContainer';

export const EditPoll = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useGetPollByIdQuery({ variables: { id } });

  if (!id) return <Navigate to="/app" />;

  if (loading) return <Spinner />;
  if (!data || error) return <div>Error</div>;

  return <EditPollFormContainer poll={data.poll} />;
};
