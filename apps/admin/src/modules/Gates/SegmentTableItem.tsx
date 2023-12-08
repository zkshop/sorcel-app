import type { NftSegment, Segment } from '@3shop/admin-store';
import { deleteSegment } from '@3shop/admin-store';
import type { WithIndex } from '@3shop/ui';
import { CloseIcon, Image, Td, Tr } from '@3shop/ui';
import { useCollection } from '@center-inc/react';
import { useDispatch } from 'react-redux';

const NftSegmentItem = ({
  contractAddress,
  network,
  index,
}: Omit<WithIndex<NftSegment>, 'type'>) => {
  const result = useCollection({
    address: contractAddress,
    network: network === 'ETHEREUM' ? 'ethereum-mainnet' : 'polygon-mainnet',
  });
  const dispatch = useDispatch();

  return (
    <Tr
      sx={{
        _hover: {
          backgroundColor: '#0077ff1e',
          cursor: 'pointer',
        },
      }}
    >
      <Td>
        <Image height={50} src={result?.smallPreviewImageUrl} alt="collection_preview" />
      </Td>
      <Td>{result?.name}</Td>
      <Td>
        <CloseIcon float="right" onClick={() => dispatch(deleteSegment(index))} />
      </Td>
    </Tr>
  );
};

export const SegmentTableItem = (item: WithIndex<Segment>) => {
  const dispatch = useDispatch();

  if (item.type === 'NFT') {
    return (
      <NftSegmentItem
        index={item.index}
        contractAddress={item.contractAddress}
        network={item.network}
      />
    );
  } else if (item.type === 'POAP')
    return (
      <Tr
        sx={{
          _hover: {
            backgroundColor: '#0077ff1e',
            cursor: 'pointer',
          },
        }}
      >
        <Td>Poap List</Td>
        <Td>{item.poapIds.join(', ')}</Td>
        <Td>
          <CloseIcon float="right" onClick={() => dispatch(deleteSegment(item.index))} />
        </Td>
      </Tr>
    );
};
