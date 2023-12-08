import type { Segment } from '@3shop/admin-store';
import { Network_Enum, Segment_Type_Enum } from '@3shop/apollo';

export default (segment: Segment) =>
  segment.type === 'NFT'
    ? {
        type: Segment_Type_Enum.Nft,
        network: segment.network === 'ETHEREUM' ? Network_Enum.Ethereum : Network_Enum.Polygon,
        nft_contract_address: segment.contractAddress,
        poapIds: undefined,
      }
    : {
        type: Segment_Type_Enum.Poap,
        poap_ids: segment.poapIds,
        network: undefined,
        nft_contract_address: undefined,
      };
