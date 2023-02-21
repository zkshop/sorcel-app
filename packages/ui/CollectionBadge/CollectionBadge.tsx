import { NftBadge } from './NftBadge/NftBadge';
import { PoapBadge } from './PoapBadge/PoapBadge';

type CollectionBadgeProps = {
  collectionName?: string;
  imgUrl?: string;
  href?: string;
};

export const CollectionBadge = ({ collectionName, imgUrl }: CollectionBadgeProps) => {
  if (imgUrl) {
    return <PoapBadge imgUrl={imgUrl} />;
  }

  if (collectionName) {
    return <NftBadge title={collectionName} />;
  }

  return null;
};
