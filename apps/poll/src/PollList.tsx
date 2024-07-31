import { Box, Flex, Spinner, styled } from '@3shop/ui';
import { Poll } from './Poll';
import { Link } from 'react-router-dom';
import { useGetPollsQuery } from '@3shop/apollo';
import { envVars } from '@3shop/config';

const PollContainer = styled(Box)`
  width: 24%;
  @media (max-width: 1024px) {
    width: 49%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PollListContainer = styled(Flex)`
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-basis: 0;
`;

export const PollList = () => {
  console.log('APP_ID: ' + envVars.APP_ID);
  const { loading, data } = useGetPollsQuery({
    variables: { app_id: envVars.APP_ID || '0690ce03-9bbd-486e-a66e-752e48e299cf' },
  });

  if (loading) return <Spinner />;
  if (!data) return <>Error</>;

  return (
    <PollListContainer columnGap={2} rowGap={24}>
      {data.polls.map((poll) => (
        <PollContainer key={`poll-${poll.id}`}>
          <Link to={`/choices/${poll.id}`}>
            <Poll
              completed={poll.completed}
              image={poll.image || undefined}
              id={poll.id}
              title={poll.title}
            />
          </Link>
        </PollContainer>
      ))}
    </PollListContainer>
  );
};
