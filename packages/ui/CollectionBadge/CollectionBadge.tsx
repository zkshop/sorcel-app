import { NftBadge } from './NftBadge/NftBadge';
import { PoapBadge } from './PoapBadge/PoapBadge';

type CollectionBadgeProps = {
  collectionName: string;
  imgUrl?: string;
};

export const CollectionBadge = ({ collectionName, imgUrl }: CollectionBadgeProps) => {
  if (!collectionName && !imgUrl) return null;

  return imgUrl ? <PoapBadge imgUrl={imgUrl} /> : <NftBadge title={collectionName} />;
};
