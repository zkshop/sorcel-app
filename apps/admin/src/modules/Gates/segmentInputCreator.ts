import type { NftSegment, Segment } from '@3shop/admin-store';
import { Network_Enum, Segment_Type_Enum } from '@3shop/apollo';

const determineNetwork = (segment: NftSegment): Network_Enum => {
  console.log('!network', Network_Enum);
  if ((Object.values(Network_Enum) as string[]).includes(segment.network))
    return segment.network as Network_Enum;
  else throw new Error(`Network ${segment.network} not recognized.`);
};

export default (segment: Segment) =>
  segment.type === 'NFT'
    ? {
        type: Segment_Type_Enum.Nft,
        network: determineNetwork(segment),
        nft_contract_address: segment.contractAddress,
        poapIds: undefined,
      }
    : {
        type: Segment_Type_Enum.Poap,
        poap_ids: segment.poapIds,
        network: undefined,
        nft_contract_address: undefined,
      };
