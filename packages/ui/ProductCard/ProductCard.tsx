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
            height: { xs: '150px', sm: '160px', md: '200px' },
          }}
        >
          <Image alt="product" src={srcItem} w="full" h="full" />
        </Box>

        <Text
          fontWeight="bold"
          fontSize="14px"
          color="black"
          marginTop="4px"
          padding="2px"
          textTransform="capitalize"
        >
          {title}
        </Text>

        <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
          <HStack px={1}>
            <Text
              fontWeight="bold"
              fontSize="14px"
              color="black"
              textDecoration={discount ? 'line-through' : 'none'}
              marginRight={discount ? '2px' : 'none'}
            >
              {`${price}€`}
            </Text>

            {discount && (
              <Text fontWeight="bold" fontSize="14px" color="#FF5F1F" marginLeft="0 !important">
                {`${priceReduced}€`}
              </Text>
            )}
          </HStack>

          {discount && (
            <Box
              border="1px gray solid"
              width="50px"
              borderRadius="2xl"
              padding="2px"
              marginTop="4px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="bold" fontSize="12px" color="black" padding="2px">
                {`-${discount}%`}
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </StyledProductCard>
  );
};
