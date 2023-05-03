import { Image, Link, useMediaQuery } from '@chakra-ui/react';

type PoapLinkProps = {
  poapId: string;
  imgUrl: string;
};

const imageWidth = {
  sm: 100,
  lg: 120,
} as const;

const POAP_WEBSITE_URL = 'https://poap.gallery';

export const PoapLink = ({ poapId, imgUrl }: PoapLinkProps) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const width = imageWidth[isLargerThan768 ? 'lg' : 'sm'];

  return (
    <Link href={`${POAP_WEBSITE_URL}/event/${poapId}`} target="_blank" rel="noreferrer noopener">
      <Image width={width} src={imgUrl} />
    </Link>
  );
};
