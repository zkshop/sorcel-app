import { Box, Flex, Spinner } from '@3shop/ui';
import { Poll } from './Poll';
import { Link } from 'react-router-dom';
import { useGetPollsQuery } from '@3shop/apollo';

export const PollList = () => {
  const { loading, data } = useGetPollsQuery();

  if (loading) return <Spinner />;
  if (!data) return <>Error</>;

  return (
    <Flex justifyContent="flex-start" flexDirection="row" flexWrap="wrap" gap={2}>
      {data.polls.map((poll) => (
        <Box flex={1}>
          <Link to={`/choices/${poll.id}`}>
            <Poll id={poll.id} title={poll.title} />
          </Link>
        </Box>
      ))}
    </Flex>
  );
};
