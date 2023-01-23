import { Box, Text, Image } from '@chakra-ui/react';
import { LockedLayer } from './LockedLayer';
import { StyledProductCard } from './ProductCard.style';

export type ProductCardProps = {
  id?: string;
  srcItem: string;
  title: string;
  discount?: number;
  price: number;
  priceReduced?: number;
  description?: any;
  externalLink?: string;
  highlight?: boolean;
  isLocked?: boolean;
  targetAttribute?: string;
};

const CLASSNAME = 'tbw-product-card';

export const ProductCard = ({
  srcItem,
  title,
  description,
  externalLink,
  highlight = false,
  isLocked = false,
  targetAttribute = '_blank',
}: ProductCardProps) => {
  const href = !isLocked && externalLink ? externalLink : '#';
  const additionalProps = isLocked
    ? {}
    : {
        href,
        target: targetAttribute,
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
          h: '140px',
          w: '100%',
        }}
      />

      <Box
        sx={{
          h: '140px',
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
            mt: '8px',
          }}
        >
          {description}
        </Text>
      </Box>
    </StyledProductCard>
  );
};
