import { Box, HStack, Image, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { StyledProductCard } from './ProductCard.style';
import { LockedLayer } from '../LockedLayer/LockedLayer';
import { classnames } from '@3shop/config';

import { DiscountTag } from './DiscountTag';
import { Text } from '../Text/Text';
import { CollectionBadge } from '../CollectionBadge/CollectionBadge';
import { Product_Type_Enum } from '@3shop/apollo';
import { ProductCardModal } from './ProductCardModal';
import type { FormatedProductData } from '@3shop/types';
import { useCollection } from '@center-inc/react';
import { PoapListModal } from './PoapListModal';

export type ProductCardProps = {
  id?: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
  priceReduced?: number;
  collectionName?: string;
  poapUrl?: string;
  poapImgList?: { id: string; url: string }[];
  isLocked?: boolean;
  isWithHref?: boolean;
  isWalletConnected?: boolean;
  type: Product_Type_Enum;
  webhookUrl?: string;
  description?: string;
  gate: FormatedProductData['gate'];
  auth?: string;
};

interface ProductCardTwoProps {
  name: string,
  isLocked: boolean
}

export const ProductCardTwo = ({name, isLocked}: ProductCardTwoProps) => {
  return <>
    <h1>{`${name}, locked: ${isLocked}`}</h1>
  </>
}

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
  isWalletConnected = false,
  type,
  webhookUrl,
  description,
  gate,
  auth,
}: ProductCardProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isProductModalOpen,
    onClose: onProductModalClose,
    onOpen: onProductModalOpen,
  } = useDisclosure();
  const to = `product/${id}`;

  const result = useCollection({
    address: gate?.[0]?.contractAddress || '',
    network: gate?.[0]?.network === 'ETHEREUM' ? 'ethereum-mainnet' : 'polygon-mainnet',
  });

  const additionalProps =
    (isLocked || !isWithHref) && type === Product_Type_Enum.Commerce
      ? {}
      : {
          to,
        };
  const isDiscount = !!discount;

  return (
    <StyledProductCard
      className={classnames.PRODUCT_CARD.CONTAINER}
      as={isLocked || type === Product_Type_Enum.Modal ? 'div' : Link}
      onClick={!isLocked && type === Product_Type_Enum.Modal ? onProductModalOpen : undefined}
      {...additionalProps}
    >
      <Box className={classnames.PRODUCT_CARD.IMG_CONTAINER} position="relative" mb={2} flex={1}>
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
            textDecoration={discount ? 'line-through' : 'none'}
            marginRight={discount ? '2px' : 'none'}
          >
            {price ? `${price}€` : <span style={{ color: 'red' }}>FREE</span>}
          </Text>

          {isDiscount && (
            <Text
              className={classnames.PRODUCT_CARD.REDUCED_PRICE}
              fontWeight="bold"
              fontSize="14px"
              color="red"
              marginLeft="0 !important"
            >
              {priceReduced ? `${priceReduced} €` : <span style={{ color: 'red' }}>FREE</span>}
            </Text>
          )}
        </HStack>
      </Box>
      <Box right={0} onClick={onOpen}>
        {(poapImgList || result) && (
          <CollectionBadge nftUrl={result?.smallPreviewImageUrl} poapImgList={poapImgList} />
        )}
      </Box>
      {isLocked && (
        <LockedLayer
          text={
            isWalletConnected
              ? "You don't have the right digital assets"
              : 'Connect your email or wallet'
          }
          collectionName={collectionName}
        />
      )}
      {isDiscount && <DiscountTag discount={discount} />}

      <PoapListModal isOpen={isOpen} onClose={onClose} name={name} poapImgList={poapImgList} />

      <ProductCardModal
        description={description}
        webhookUrl={webhookUrl || ''}
        isOpen={isProductModalOpen}
        onClose={onProductModalClose}
        title={name}
        onOpen={onProductModalOpen}
        gate={gate}
        auth={auth}
      />
    </StyledProductCard>
  );
};
