import { Box, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { CollectionBadge } from '../CollectionBadge/CollectionBadge';

const ImageWrap = styled.span`
  margin: 32px auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
  }
`;

export type ProductCardProps = {
  id?: string;
  srcItem: string;
  title: string;
  discount?: string;
  price: string;
  collection: string;
  isTransparent: boolean;
  isAnHolder: boolean;
  poapUrl: string;
  poapImgUrl?: string;
  description?: any;
};

export const ProductCard = ({
  srcItem,
  title,
  discount,
  price,
  collection,
  isTransparent,
  isAnHolder,
  id,
  poapUrl,
  poapImgUrl,
}: ProductCardProps) => {
  const princeNumber = parseInt(price);
  const discountNumber = discount ? parseInt(discount) : 0;

  const promoPercent = discount ? discountNumber / 100 : 0;
  const priceReduced = discount ? princeNumber - princeNumber * promoPercent : 0;

  return (
    <Link href={`product/${id}`}>
      <Box
        as="a"
        cursor="pointer"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        bg="white"
        width="100%"
        borderRadius="10px"
        position="relative"
        _before={
          isAnHolder
            ? {
                content: '""',
                zIndex: -1,
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                bottom: '-6px',
                left: '-6px',
                background:
                  'linear-gradient(to right, var(--chakra-colors-bannerLeft) , var(--chakra-colors-bannerRight))',
                transition: 'opacity 0.3s',
                borderRadius: 'inherit',
                filter: 'blur(5px)',
                opacity: 0.9,
              }
            : {}
        }
        _after={
          isAnHolder
            ? {
                content: '""',
                zIndex: -1,
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background: 'inherit',
                borderRadius: 'inherit',
              }
            : {}
        }
      >
        <CollectionBadge collectionName={collection} imgUrl={poapImgUrl} href={poapUrl} />

        {isTransparent && (
          <>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                opacity: 0.5,
                borderRadius: '10px',
              }}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              bgColor="black"
            />
            <Text
              px={1}
              position="absolute"
              top={90}
              textAlign="center"
              color="white"
              fontWeight="bold"
              zIndex={1}
            >
              Connect your {collection || 'Misfitwear'} wallet to unlock
            </Text>
          </>
        )}
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
      </Box>
    </Link>
  );
};
