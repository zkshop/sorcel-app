import type { GetProductsQuery, Utility_Enum } from '@3shop/apollo';
import { Box, HStack, Image, useDisclosure } from '@chakra-ui/react';
import { StyledProductCard } from './ProductCard.style';
import { LockedLayer } from '../LockedLayer/LockedLayer';
import { classnames } from '@3shop/config';
import { DiscountTag } from './DiscountTag';
import { Text } from '../Text/Text';
import { CollectionBadge } from '../CollectionBadge/CollectionBadge';
import { ProductCardEmailModal } from './ProductCardEmailModal';
import { getElementProps } from './getElementProps';

export type ProductCardProps = {
  id?: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
  priceReduced?: number;
  collectionName?: string;
  poapImgUrl?: string;
  isLocked?: boolean;
  utility: Utility_Enum;
  webhookUrl?: GetProductsQuery['products'][0]['webhookUrl'];
};

export const ProductCard = ({
  id,
  name,
  image,
  price,
  discount,
  priceReduced,
  collectionName,
  poapImgUrl,
  isLocked = false,
  utility,
  webhookUrl,
}: ProductCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure({});
  const productPageLink = `product/${id}`;
  const isDiscount = !!discount;

  const { elementType: DynamicElement, elementProps } = getElementProps({
    utility,
    isLocked,
    productPageLink,
    onOpen,
  });

  return (
    <StyledProductCard
      className={classnames.PRODUCT_CARD.CONTAINER}
      as={DynamicElement}
      {...elementProps}
    >
      {utility === 'EMAIL_MODAL' && (
        <ProductCardEmailModal isOpen={isOpen} onClose={onClose} webhookUrl={webhookUrl} />
      )}

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

      {(poapImgUrl || collectionName) && (
        <CollectionBadge collectionName={collectionName} imgUrl={poapImgUrl} />
      )}
      {isLocked && <LockedLayer collectionName={collectionName} />}
      {isDiscount && <DiscountTag discount={discount} />}
    </StyledProductCard>
  );
};
