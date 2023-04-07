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
  name: string;
  image: string;
  price: number;
  discount?: number;
  priceReduced?: number;
  collectionName?: string;
  poapUrl?: string;
  poapImgList?: string[];
  isLocked?: boolean;
  isWithHref?: boolean;
};

export const ProductCard = ({
  id,
  name,
  image,
  price,
  discount,
  priceReduced,
  collectionName,
  poapImgList,
  isLocked = false,
  isWithHref = true,
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
          src={image}
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
            {name}
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

      {(poapImgList || collectionName) && (
        <CollectionBadge collectionName={collectionName} poapImgList={poapImgList} />
      )}
      {isLocked && <LockedLayer collectionName={collectionName} />}
      {isDiscount && <DiscountTag discount={discount} />}
    </StyledProductCard>
  );
};
