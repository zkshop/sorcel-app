import { Box, Text, Button, HStack as Flex, VStack } from '@chakra-ui/react';
import { CollectionBadge } from '../CollectionBadge/CollectionBadge';
import { TriangleUpIcon } from '../Icons';
import { StyledProductDetails } from './ProductDetails.style';
import Image from 'next/legacy/image';
import { LockedLayer } from '../LockedLayer/LockedLayer';

type ProductDetailsProps = {
  id?: string;
  srcItem: string;
  title: string;
  discount?: string;
  price: string;
  collection?: string;
  isTransparent?: boolean;
  isEligible?: boolean;
  description?: string;
  priceReduced?: number;
  poapUrl?: string;
  poapImgUrl?: string;
  sendTransaction?: Function;
};

export const ProductDetails = ({
  id,
  title,
  srcItem,
  description,
  price,
  discount,
  priceReduced,
  isEligible = true,
  isTransparent = false,
  collection,
  poapImgUrl,
  poapUrl,
}: ProductDetailsProps) => (
  <StyledProductDetails isEligible={isEligible}>
    <CollectionBadge collectionName={collection} imgUrl={poapImgUrl} href={poapUrl} />

    <LockedLayer isLocked={isTransparent} collectionName={collection} size="lg" />

    <Flex alignItems="stretch" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Flex justifyContent="center">
        <Image alt="product" height={400} width={400} src={srcItem} />
      </Flex>

      <VStack flex={1} justifyContent="space-between">
        <VStack flex={1}>
          <Box alignSelf="flex-start">
            <Text
              fontWeight="bold"
              fontSize="24px"
              color="black"
              mt={1}
              p={1}
              background="#EEEEEF"
              textTransform="capitalize"
              width="fit-content"
            >
              {title}
            </Text>
          </Box>

          <Text
            sx={{
              fontsize: '14px',
              color: 'black',
              p: 1,
            }}
          >
            {description}
          </Text>
        </VStack>

        <VStack flex={1} width="100%" p={2} alignItems="stretch" justifyContent="end">
          {/* <SizeSelector /> */}
          <Box display="flex" justifyContent="space-between" alignItems="flex-end">
            {discount ? (
              <Box
                border="1px #dedde0 solid"
                width="50px"
                borderRadius="2xl"
                padding="2px"
                marginTop="4px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontWeight="bold" fontSize="14px" color="black" padding="2px">
                  {`-${discount}%`}
                </Text>
              </Box>
            ) : (
              <Box />
            )}

            <Box display="flex">
              <Text
                fontWeight="bold"
                fontSize="16px"
                color="black"
                padding="2px"
                textDecoration={discount ? 'line-through' : 'none'}
                marginRight={discount ? '2px' : 'none'}
              >
                {`${price}€`}
              </Text>
              {discount && (
                <Text fontWeight="bold" fontSize="16px" color="#FF5F1F" padding="2px">
                  {`${priceReduced}€`}
                </Text>
              )}
            </Box>
          </Box>

          {isTransparent ? null : (
            <Box mt={2}>
              <Button
                as="a"
                height="48px"
                width="100%"
                borderRadius="2xl"
                p={1}
                isDisabled={isTransparent}
                bg="#4473c3"
                _hover={{
                  bg: '#5686d8',
                }}
                href={`/shipping/${id}`}
              >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Text
                    fontWeight="bold"
                    fontSize="16px"
                    color="white"
                    mr={1}
                    textTransform="uppercase"
                  >
                    PAY
                  </Text>

                  <Box borderRadius="2xl" display="flex">
                    <TriangleUpIcon
                      style={{
                        marginLeft: '8px',
                      }}
                      color="white"
                    />
                  </Box>
                </Box>
              </Button>
            </Box>
          )}
        </VStack>
      </VStack>
    </Flex>
  </StyledProductDetails>
);
