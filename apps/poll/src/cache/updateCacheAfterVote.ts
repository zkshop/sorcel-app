import type { ApolloCache, FetchResult, VoteMutation } from '@3shop/apollo';

export function updateCacheAfterVote(
  cache: ApolloCache<any>,
  { data }: Omit<FetchResult<VoteMutation>, 'context'>,
) {
  cache.modify({
    id: cache.identify(data?.choice?.id),
    fields: { count: (count) => count + 1 },
  });

  cache.modify({
    id: cache.identify(data?.poll?.id),
    fields: { voters: data?.poll?.voters },
  });
}
