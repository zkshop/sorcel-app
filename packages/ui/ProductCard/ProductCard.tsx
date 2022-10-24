import { Box, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { CollectionBadge } from '../CollectionBadge/CollectionBadge';
import { StyledProductCard } from './ProductCard.style';
import { LockedLayer } from '../LockedLayer/LockedLayer';

export type ProductCardProps = {
  id?: string;
  srcItem: string;
  title: string;
  discount?: string;
  price: string;
  priceReduced?: number;
  collection: string;
  isTransparent: boolean;
  isEligible: boolean;
  poapUrl: string;
  poapImgUrl?: string;
  description?: any;
};

export const ProductCard = ({
  srcItem,
  title,
  discount,
  price,
  priceReduced,
  collection,
  isTransparent,
  isEligible,
  id,
  poapUrl,
  poapImgUrl,
}: ProductCardProps) => (
  <Link href={`product/${id}`}>
    <StyledProductCard as="a" isEligible={isEligible}>
      <CollectionBadge collectionName={collection} imgUrl={poapImgUrl} href={poapUrl} />

      <LockedLayer isLocked={isTransparent} collectionName={collection} />

      <Box p={2}>
        <Box
          sx={{
            position: 'relative',
            borderRadius: '10px',
            height: { xs: '150px', sm: '160px', md: '200px' },
          }}
        >
          <Image alt="product" src={srcItem} layout="fill" />
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
              borderRadius="10px"
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
  </Link>
);
