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
        {poapImgList.slice(0, 2).map((poap, index) => (
          <PoapBadge key={`badge-${index}-${poap.id}`} index={index} imgUrl={poap.url} />
        ))}

        {poapImgList.length > 2 && (
          <PoapBadge
            imgUrl=""
            index={poapImgList.length - 1}
            addtionnalPoaps={poapImgList.length - 2}
          />
        )}
      </>
    );
  }

  if (nftUrl) {
    return <NftBadge imgUrl={nftUrl} />;
  }

  return null;
};
