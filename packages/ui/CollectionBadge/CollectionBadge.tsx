import { NftBadge } from './NftBadge/NftBadge';
import { PoapBadge } from './PoapBadge/PoapBadge';

type CollectionBadgeProps = {
  collectionName?: string;
  poapImgList?: string[];
  href?: string;
};

export const CollectionBadge = ({ collectionName, poapImgList }: CollectionBadgeProps) => {
  if (poapImgList) {
    return (
      <>
        {poapImgList.map((imgUrl, index) => (
          <PoapBadge index={index} imgUrl={imgUrl} />
        ))}
      </>
    );
  }

  if (collectionName) {
    return <NftBadge title={collectionName} />;
  }

  return null;
};
