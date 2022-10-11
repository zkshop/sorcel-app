import { Box, Text, Button, Image, HStack as Flex, VStack } from '@chakra-ui/react';
import { CollectionBadge } from '../CollectionBadge/CollectionBadge';
import { TriangleUpIcon } from '../Icons';
import { StyledProductDetails } from './ProductDetails.style';

type ProductDetailsProps = {
  id?: string;
  srcItem: string;
  title: string;
  discount?: string;
  price: string;
  collection: string;
  isTransparent: boolean;
  isEligible: boolean;
  description?: string;
  priceReduced: number;
  poapUrl: string;
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
  isEligible,
  isTransparent,
  collection,
  poapImgUrl,
  poapUrl,
  sendTransaction,
}: ProductDetailsProps) => (
  <StyledProductDetails isEligible={isEligible}>
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
            opacity: 0.4,
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
          top={190}
          textAlign="center"
          color="white"
          fontWeight="bold"
          fontSize="2xl"
          width="100%"
        >
          Connect your {collection || 'Misfitwear'} wallet to unlock
        </Text>
      </>
    )}

    <Flex alignItems="stretch" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Flex justifyContent="center">
        <Image alt="product" height="500px" src={srcItem} />
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
                borderRadius="10px"
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

          <Box mt={2}>
            <Button
              as="a"
              height="48px"
              width="100%"
              borderRadius="10px"
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
                  Pay in fiat
                </Text>

                <Box borderRadius="10px" display="flex">
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

          {/* <Box mt={2}>
            <Button
              onClick={() => {
                sendTransaction?.();
              }}
              height="48px"
              width="100%"
              borderRadius="10px"
              p={1}
              isDisabled={isTransparent}
              bg="#e89938"
              _hover={{
                bg: '#f7ad54',
              }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text
                  fontWeight="bold"
                  fontSize="16px"
                  color="white"
                  mr={1}
                  textTransform="uppercase"
                >
                  Pay in crypto
                </Text>

                <Box borderRadius="10px" display="flex">
                  <TriangleUpIcon
                    style={{
                      marginLeft: '8px',
                    }}
                    color="white"
                  />
                </Box>
              </Box>
            </Button>
          </Box> */}
        </VStack>
      </VStack>
    </Flex>
  </StyledProductDetails>
);
