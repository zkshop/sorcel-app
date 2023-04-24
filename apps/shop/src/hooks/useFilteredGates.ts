import type { Gate_V2, Segment } from '@3shop/apollo';
import { Network_Enum, Segment_Type_Enum } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store/store';
import { useState, useEffect } from 'react';

export const useFilteredGates = (gates: Gate_V2[]): Gate_V2[] => {
  const [filteredGates, setFilteredGates] = useState<Gate_V2[]>([]);
  const poapList = useAppSelector((state) => state.user.poap).map(({ event: { id } }) => id);
  const nfts = useAppSelector((state) => state.user.nfts).map((nft) => nft.contract.address);

  useEffect(() => {
    const filterGates = () => {
      const result = gates.filter((gate: Gate_V2) =>
        gate.segments.some((segment: Segment) => {
          switch (segment.type) {
            case Segment_Type_Enum.Nft:
              return (
                segment.network === Network_Enum.Ethereum &&
                nfts.includes(segment.nft_contract_address || '')
              );
            case Segment_Type_Enum.Poap:
              return segment.poap_ids.some((poapId: string) => poapList.includes(Number(poapId)));
            default:
              return false;
          }
        }),
      );

      setFilteredGates(result);
    };

    filterGates();
  }, [gates, nfts, poapList]);

  return filteredGates;
};
