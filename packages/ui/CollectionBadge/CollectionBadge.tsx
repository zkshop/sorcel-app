import { NftBadge } from './NftBadge/NftBadge';
import { PoapBadge } from './PoapBadge/PoapBadge';

type CollectionBadgeProps = {
  collectionName: string;
  imgUrl?: string;
  href?: string;
};

export const CollectionBadge = ({ collectionName, imgUrl, href = '' }: CollectionBadgeProps) => {
  if (!collectionName && !imgUrl) return null;

  return imgUrl ? <PoapBadge imgUrl={imgUrl} href={href} /> : <NftBadge title={collectionName} />;
};
