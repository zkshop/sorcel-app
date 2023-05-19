import { NftBadge } from './NftBadge/NftBadge';
import { PoapBadge } from './PoapBadge/PoapBadge';

type CollectionBadgeProps = {
  collectionName?: string;
  poapImgList?: { id: string; url: string }[];
  href?: string;
};

export const CollectionBadge = ({ collectionName, poapImgList }: CollectionBadgeProps) => {
  if (poapImgList) {
    return (
      <>
        {poapImgList.map((poap, index) => (
          <PoapBadge key={`badge-${index}-${poap.id}`} index={index} imgUrl={poap.url} />
        ))}
      </>
    );
  }

  if (collectionName) {
    return <NftBadge title={collectionName} />;
  }

  return null;
};
