import { Box, Flex, Spinner, styled } from '@3shop/ui';
import { Poll } from './Poll';
import { Link } from 'react-router-dom';
import { useGetPollsQuery } from '@3shop/apollo';

const PollContainer = styled(Box)`
  width: 24%;
  @media (max-width: 1024px) {
    width: 49%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// @ts-ignore
const PollListContainer = styled(Flex)`
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-basis: 0;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const PollList = () => {
  const { loading, data } = useGetPollsQuery();

  if (loading) return <Spinner />;
  if (!data) return <>Error</>;

  return (
    <PollListContainer columnGap={2} rowGap={24}>
      {data.polls.map((poll) => (
        <PollContainer key={`poll-${poll.id}`}>
          <Link to={`/choices/${poll.id}`}>
            <Poll image={poll.image || undefined} id={poll.id} title={poll.title} />
          </Link>
        </PollContainer>
      ))}
    </PollListContainer>
  );
};
