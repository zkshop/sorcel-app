import { NftBadge } from './NftBadge/NftBadge';
import { PoapBadge } from './PoapBadge/PoapBadge';

type CollectionBadgeProps = {
  collectionName?: string;
  poapImgList?: { id: string; url: string }[];
  nftUrl?: string;
  href?: string;
};

export const CollectionBadge = ({ poapImgList, nftUrl }: CollectionBadgeProps) => {
  if (poapImgList) {
    return (
      <>
        {poapImgList.map((poap, index) => (
          <PoapBadge key={`badge-${index}-${poap.id}`} index={index} imgUrl={poap.url} />
        ))}
      </>
    );
  }

  if (nftUrl) {
    return <NftBadge imgUrl={nftUrl} />;
  }

  return null;
};
