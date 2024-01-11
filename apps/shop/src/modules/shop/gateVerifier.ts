import type { Nft } from '@3shop/alchemy';

import type { ShopGate_v2 } from './ProductListContainer';
import { every, includes } from 'lodash';
import { Segment_Type_Enum } from '@3shop/apollo';

const isPoapsMatchingOneSegment = (poapIds: number[], segment: ShopGate_v2['segments'][0]) =>
  every(segment.poap_ids, (id) => includes(poapIds, Number(id)));

const isNFTMatchingOneSegment = (address: string, segments: ShopGate_v2['segments']) =>
  segments.some((segment) => segment.nft_contract_address?.toLowerCase() === address.toLowerCase());

export type Match = {
  gate: ShopGate_v2;
  matchingNfts: Nft[];
  matchingPoaps: number[];
};

export const gateVerifier = (gates: ShopGate_v2[], nfts: Nft[], userPoapIds: number[]): Match[] =>
  gates
    .map((gate) => {
      const matchingNfts = nfts.filter(
        (nft) =>
          isNFTMatchingOneSegment(nft.contract.address, gate.segments) &&
          (!gate.claims.includes(nft.tokenId) || !gate.unique_claim),
      );

      const matchingPoaps = gate.segments
        .filter((segment) => segment.type === Segment_Type_Enum.Poap && segment.poap_ids)
        .some((segment) => isPoapsMatchingOneSegment(userPoapIds, segment))
        ? userPoapIds
        : [];

      return {
        gate,
        matchingNfts,
        matchingPoaps,
      };
    })
    .filter((entry) => entry.matchingNfts.length > 0 || entry.matchingPoaps.length > 0);
