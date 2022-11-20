import { NftBadge } from './NftBadge/NftBadge';
import { PoapBadge } from './PoapBadge/PoapBadge';

type CollectionBadgeProps = {
  collectionName?: string;
  imgUrl?: string;
  href?: string;
};

export const CollectionBadge = ({ collectionName, imgUrl, href = '' }: CollectionBadgeProps) => {
  if (imgUrl) {
    return <PoapBadge imgUrl={imgUrl} href={href} />;
  }

  if (collectionName) {
    return <NftBadge title={collectionName} />;
  }

  return null;
};
