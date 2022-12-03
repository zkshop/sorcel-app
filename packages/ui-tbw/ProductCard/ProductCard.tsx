import { Box, Text, Image } from '@chakra-ui/react';
import { LockedLayer } from './LockedLayer';
import { StyledProductCard } from './ProductCard.style';

export type ProductCardProps = {
  id?: string;
  srcItem: string;
  title: string;
  discount?: string;
  price: string;
  priceReduced?: number;
  description?: any;
  externalLink?: string;
  highlight?: boolean;
  isLocked?: boolean;
};

const CLASSNAME = 'tbw-product-card';

export const ProductCard = ({
  srcItem,
  title,
  description,
  externalLink,
  highlight = false,
  isLocked = false,
}: ProductCardProps) => {
  const href = !isLocked && externalLink ? externalLink : '#';
  const additionalProps = isLocked
    ? {}
    : {
        href,
        target: '_blank',
        rel: 'noreferrer',
      };

  return (
    <StyledProductCard
      className={CLASSNAME}
      highlight={highlight}
      as={isLocked ? 'div' : 'a'}
      {...additionalProps}
    >
      <LockedLayer isLocked={isLocked} />

      <Image
        alt="product"
        src={srcItem}
        sx={{
          height: '140px',
          width: '100%',
        }}
      />

      <Box
        sx={{
          height: '140px',
          p: '8px',
        }}
      >
        <Text
          sx={{
            fontWeight: '800',
            fontSize: '20px',
            lineHeight: '27px',
          }}
        >
          {title}
        </Text>

        <Text
          sx={{
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '17px',
            marginTop: '8px',
          }}
        >
          {description}
        </Text>
      </Box>
    </StyledProductCard>
  );
};
