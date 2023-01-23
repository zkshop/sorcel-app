import { Box, Text, HStack, Image } from '@chakra-ui/react';
import { CollectionBadge } from '../CollectionBadge/CollectionBadge';
import { StyledProductCard } from './ProductCard.style';
import { LockedLayer } from '../LockedLayer/LockedLayer';
import { classnames } from '@3shop/config';
import { Link } from 'react-router-dom';

export type ProductCardProps = {
  id?: string;
  srcItem: string;
  title: string;
  discount?: number;
  price: number;
  priceReduced?: number;
  collection?: string;
  isLocked?: boolean;
  poapUrl?: string;
  poapImgUrl?: string;
  description?: any;
  isWithHref?: boolean;
};

export const ProductCard = ({
  srcItem,
  title,
  discount,
  price,
  priceReduced,
  collection,
  isLocked = false,
  id,
  poapUrl,
  poapImgUrl,
  isWithHref = true,
}: ProductCardProps) => {
  const to = `product/${id}`;
  const additionalProps =
    isLocked || !isWithHref
      ? {}
      : {
          to,
        };

  return (
    <StyledProductCard
      className={classnames.PRODUCT_CARD}
      as={isLocked ? 'div' : Link}
      {...additionalProps}
    >
      <CollectionBadge collectionName={collection} imgUrl={poapImgUrl} href={poapUrl} />

      <LockedLayer isLocked={isLocked} collectionName={collection} />

      <Box p={2}>
        <Box
          borderRadius="2xl"
          sx={{
            position: 'relative',
            height: { xs: '150px', sm: '160px', md: '256px' },
            width: { xs: '150px', sm: '160px', md: '283px' },
          }}
        >
          <Image alt="product" src={srcItem} w="full" h="full" />
        </Box>

        <Text
          fontWeight="bold"
          fontSize="14px"
          color="secondary"
          mt={1}
          p={0.5}
          textTransform="capitalize"
        >
          {title}
        </Text>

        <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
          <HStack px={1}>
            <Text
              fontWeight="bold"
              fontSize="14px"
              color="secondary"
              textDecoration={discount ? 'line-through' : 'none'}
              mr={discount ? 0.5 : 0}
            >
              {`${price}€`}
            </Text>

            {discount && (
              <Text fontWeight="bold" fontSize="14px" color="discount" ml="0 !important">
                {`${priceReduced}€`}
              </Text>
            )}
          </HStack>

          {discount !== 0 && (
            <Box
              border="1px gray solid"
              w="50px"
              borderRadius="2xl"
              p={0.5}
              mt={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="bold" fontSize="12px" color="secondary" p={0.5}>
                {`-${discount}%`}
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </StyledProductCard>
  );
};
