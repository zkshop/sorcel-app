import { VoteModal } from './VoteModal';
import { useGetPollByIdQuery, useVoteMutation } from '@3shop/apollo';
import type { Nullable } from '@3shop/types';
import { Box, Flex, Spinner, useDisclosure, Heading, useToast, Text, styled } from '@3shop/ui';

import { useAccount } from '@3shop/wallet/internal/xaman/XamanWalletProvider';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChoiceItem } from './ChoiceItem';
// import { useAppSelector } from './store/store';
import type { ChoiceType } from './utils';
// import { isHolder } from './utils';
import { haveAlreadyVote } from './utils/haveAlreadyVote';
import { ChoicesImage } from './ChoicesImage';
import { updateCacheAfterVote } from './cache';
import { TitleLayer } from './TitleLayer';

import axios from 'axios';
import { envVars } from '@3shop/config';

const MobileTitleLayer = styled(Text)`
  display: none;

  @media (max-width: 425px) {
    margin-top: 2rem;
    display: block;
    text-align: center;
    font-weight: bold;
  }
`;

export const Choices = () => {
  const { id } = useParams() as { id: string };
  // const nfts = useAppSelector((state) => state.nfts);
  const { address } = useAccount();
  const { loading, data } = useGetPollByIdQuery({ variables: { id } });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [choice, setChoice] = useState<Nullable<ChoiceType>>(null);
  const [vote, { loading: voteLoading, error: voteError }] = useVoteMutation();
  const toast = useToast();
  // change the isHolder to work with bithomp and change data?.poll?.gate to data?.poll?.issuer and data?.poll?.taxon
  const isLocked = false; // Boolean(data?.poll?.gate && !isHolder(nfts, data.poll.gate));

  if (loading) return <Spinner />;
  if (!data || !data.poll) return <>Error</>;

  const identifiers = {
    issuer: data?.poll?.issuer,
    nftokenTaxon: data?.poll?.taxon,
  };

  const XRPNftReaderClient = () => ({
    getWalletNfts: async (
      walletAddress: string,
      identifiers: { issuer: string; nftokenTaxon: string },
    ) => {
      const params = {
        owner: walletAddress,
        list: 'nfts',
        issuer: identifiers.issuer,
        taxon: identifiers.nftokenTaxon,
      };
      const nfts = await axios
        .get(`https://bithomp.com/api/v2/nfts`, {
          params,
          headers: {
            'x-bithomp-token': envVars.SECRET_BITHOMP,
          },
        })
        .then(({ data }) => data.nfts);
      return nfts;
    },
  });

  const handleNftSearchOwner = async () => {
    if (address == null) {
      return false;
    }
    const client = XRPNftReaderClient();
    if (!identifiers.issuer || !identifiers.nftokenTaxon) {
      return false;
    }
    const nfts = await client.getWalletNfts(address, {
      issuer: identifiers.issuer,
      nftokenTaxon: identifiers.nftokenTaxon,
    });
    if (nfts.length <= 0) return false;
    else return true;
  };

  const alreadyVoted = haveAlreadyVote(data.poll.voters, address);

  const handleClickOnChoice = (choice: ChoiceType) => {
    setChoice(choice);
    onOpen();
  };

  const handleVote = async (choiceId: string) => {
    if (!address) {
      toast({
        title: 'Connect your wallet to vote',
        status: 'warning',
        duration: 2000,
      });
      return;
    }

    const isOwner = await handleNftSearchOwner();

    if (!isOwner) {
      toast({
        title: "You don't have the required NFT to vote",
        status: 'warning',
        duration: 2000,
      });
      return;
    }

    await vote({
      variables: { choiceId, pollId: id, voters: [address] },
      update: updateCacheAfterVote,
    });

    if (voteError) {
      toast({
        title: 'An Error occurred',
        status: 'error',
        duration: 2000,
        description: 'Try again later or contact us to report the issue',
      });
    } else {
      toast({
        title: 'You voted successfully',
        status: 'success',
        duration: 2000,
      });
    }
  };

  const completed = data.poll.completed;

  return (
    <>
      <Box height="100%">
        <Box m="auto" position="relative">
          <ChoicesImage isLocked={isLocked} src={data.poll.image || undefined} />
          <TitleLayer>
            <Text color="white" fontWeight="bold" textAlign="center">
              {data.poll.title}
            </Text>
          </TitleLayer>
          <MobileTitleLayer>{data.poll.title}</MobileTitleLayer>
        </Box>
        <Box marginTop={8} flex={1} display="flex" justifyContent="center" alignItems="center">
          {isLocked ? (
            <Heading color="grey" textAlign="center" fontSize="x-large">
              Connect your wallet
            </Heading>
          ) : (
            <Flex gap={2} justifyContent="center" flexWrap="wrap" w="100%">
              {data.poll.choices.map((choice) => (
                <ChoiceItem
                  key={`choice-${choice.id}`}
                  handleClickOnChoice={handleClickOnChoice}
                  title={choice.value}
                  id={choice.id}
                  votes={choice.count}
                  alreadyVoted={alreadyVoted}
                  completed={completed}
                />
              ))}
            </Flex>
          )}
        </Box>
      </Box>

      <VoteModal
        loading={voteLoading}
        isOpen={isOpen}
        onClose={onClose}
        choice={choice}
        handleVote={handleVote}
      />
    </>
  );
};
