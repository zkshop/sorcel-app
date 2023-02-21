import { Box, HStack, Image } from '@chakra-ui/react';
import { StyledProductCard } from './ProductCard.style';
import { LockedLayer } from '../LockedLayer/LockedLayer';
import { classnames } from '@3shop/config';
import { Link } from 'react-router-dom';
import { DiscountTag } from './DiscountTag';
import { Text } from '../Text/Text';
import { CollectionBadge } from '../CollectionBadge/CollectionBadge';

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
  id,
  srcItem,
  title,
  discount,
  price,
  priceReduced,
  collection,
  isLocked = false,
  isWithHref = true,
  poapImgUrl,
}: ProductCardProps) => {
  const to = `product/${id}`;
  const additionalProps =
    isLocked || !isWithHref
      ? {}
      : {
          to,
        };
  const isDiscount = !!discount;

  return (
    <StyledProductCard
      className={classnames.PRODUCT_CARD.CONTAINER}
      as={isLocked ? 'div' : Link}
      {...additionalProps}
    >
      <Box
        className={classnames.PRODUCT_CARD.IMG_CONTAINER}
        sx={{
          position: 'relative',
          mb: 2,
          flex: 1,
        }}
      >
        <Image
          className={classnames.PRODUCT_CARD.IMG}
          alt="product"
          src={srcItem}
          w="full"
          h="full"
          objectFit="cover"
        />
      </Box>

      <Box className={classnames.PRODUCT_CARD.DETAILS} display="flex" flexDirection="column">
        <Box minH="16px">
          <Text
            className={classnames.PRODUCT_CARD.TITLE}
            fontWeight="bold"
            fontSize="14px"
            color="black"
            mb={2}
            textTransform="capitalize"
            letterSpacing={0.5}
          >
            {title}
          </Text>
        </Box>

        <HStack className={classnames.PRODUCT_CARD.PRICING_ZONE} h="20px">
          <Text
            className={classnames.PRODUCT_CARD.PRICE}
            fontWeight="bold"
            fontSize="14px"
            color="black"
            textDecoration={discount ? 'line-through' : 'none'}
            marginRight={discount ? '2px' : 'none'}
          >
            {`${price}€`}
          </Text>

          {isDiscount && (
            <Text
              className={classnames.PRODUCT_CARD.REDUCED_PRICE}
              fontWeight="bold"
              fontSize="14px"
              color="red"
              marginLeft="0 !important"
            >
              {`${priceReduced}€`}
            </Text>
          )}
        </HStack>
      </Box>

      {(poapImgUrl || collection) && (
        <CollectionBadge collectionName={collection} imgUrl={poapImgUrl} />
      )}
      {isLocked && <LockedLayer collectionName={collection} />}
      {isDiscount && <DiscountTag discount={discount} />}
    </StyledProductCard>
  );
};
