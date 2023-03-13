import type { GetProductsQuery, Utility_Enum } from '@3shop/apollo';
import { Box, Text, Image, useDisclosure } from '@chakra-ui/react';
import { StyledTBWProductCard } from './TBWProductCard.style';
import { ProductCardEmailModal } from '../../ProductCard/ProductCardEmailModal';
import { LockedLayer } from '../../LockedLayer/LockedLayer';
import { getElementProps } from '../../ProductCard/getElementProps';

export type TBWProductCardProps = {
  id?: string;
  name: string;
  description?: any;
  image: string;
  price: number;
  discount?: number;
  priceReduced?: number;
  externalLink?: string;
  isLocked?: boolean;
  utility: Utility_Enum;
  webhookUrl?: GetProductsQuery['products'][0]['webhookUrl'];
  targetAttribute?: string;
};

const CLASSNAME = 'tbw-product-card';

export const TBWProductCard = ({
  id,
  name,
  description,
  image,
  externalLink,
  isLocked = false,
  webhookUrl,
  targetAttribute,
  utility,
}: TBWProductCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure({});
  const productPageLink = `product/${id}`;

  const { elementType: DynamicElement, elementProps } = getElementProps({
    utility,
    isLocked,
    externalLink,
    targetAttribute,
    productPageLink,
    onOpen,
  });

  return (
    <>
      {utility === 'EMAIL_MODAL' && (
        <ProductCardEmailModal isOpen={isOpen} onClose={onClose} webhookUrl={webhookUrl} />
      )}

      <StyledTBWProductCard className={CLASSNAME} as={DynamicElement} {...elementProps}>
        <Image
          alt="product"
          src={image}
          sx={{
            height: '140px',
            width: '100%',
          }}
        />

        <Box h="140px" p={2}>
          <Text
            sx={{
              fontWeight: '800',
              fontSize: '20px',
              lineHeight: '27px',
            }}
          >
            {name}
          </Text>

          <Text
            sx={{
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '17px',
              mt: 2,
            }}
          >
            {description}
          </Text>
        </Box>

        {isLocked && <LockedLayer />}
      </StyledTBWProductCard>
    </>
  );
};
