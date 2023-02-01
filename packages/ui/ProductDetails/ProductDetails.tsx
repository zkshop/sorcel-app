import { Box, Text, Button, VStack, Image, Grid, GridItem } from '@chakra-ui/react';
import { TriangleUpIcon } from '../Icons';
import { LockedLayer } from '../LockedLayer/LockedLayer';
import { Link } from 'react-router-dom';
import type { Nullable } from '@3shop/types';
import { classnames } from '@3shop/config';

type ProductDetailsProps = {
  id?: string;
  srcItem: string;
  title: string;
  discount?: Nullable<number>;
  price: number;
  collection?: string;
  isLocked?: boolean;
  description?: string;
  priceReduced?: number;
  poapUrl?: string;
  poapImgUrl?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  sendTransaction?: Function;
};

const templateColumns = {
  xs: 'repeat(1, 1fr)',
  md: 'repeat(2, 1fr)',
};

export const ProductDetails = ({
  id,
  title,
  srcItem,
  description,
  price,
  discount,
  priceReduced,
  isLocked = false,
  collection,
}: ProductDetailsProps) => (
  <Box className={classnames.PRODUCT_DETAILS.CONTAINER} w="full" position="relative">
    {isLocked && <LockedLayer collectionName={collection} size="lg" />}

    <Grid className={classnames.PRODUCT_DETAILS.GRID} templateColumns={templateColumns}>
      <GridItem className={classnames.PRODUCT_DETAILS.GRID_ITEM}>
        <Box className={classnames.PRODUCT_DETAILS.IMG_CONTAINER} mb={{ xs: 2, md: 0 }}>
          <Image
            className={classnames.PRODUCT_DETAILS.IMG}
            alt="product"
            w="full"
            h="full"
            objectFit="cover"
            src={srcItem}
          />
        </Box>
      </GridItem>

      <GridItem className={classnames.PRODUCT_DETAILS.GRID_ITEM}>
        <VStack flex={1} justifyContent="space-between" pl={{ xs: 0, md: 4 }}>
          <Box alignSelf="flex-start" w="full">
            <Text
              className={classnames.PRODUCT_DETAILS.TITLE}
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
            className={classnames.PRODUCT_DETAILS.DESCRIPTION}
            w="full"
            fontSize="14px"
            color="black"
            p={1}
          >
            {description}
          </Text>

          <Box w="full" display="flex" justifyContent="space-between" alignItems="flex-end">
            {discount && (
              <Box
                className={classnames.PRODUCT_DETAILS.DISCOUNT_TAG_CONTAINER}
                border="1px #dedde0 solid"
                width="50px"
                borderRadius="2xl"
                padding="2px"
                marginTop="4px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  className={classnames.PRODUCT_DETAILS.DISCOUNT_TAG_TEXT}
                  fontWeight="bold"
                  fontSize="14px"
                  color="black"
                  padding="2px"
                >
                  {`-${discount}%`}
                </Text>
              </Box>
            )}

            <Box className={classnames.PRODUCT_DETAILS.PRICING_ZONE} display="flex">
              <Text
                className={classnames.PRODUCT_DETAILS.PRICE}
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
                <Text
                  className={classnames.PRODUCT_DETAILS.REDUCED_PRICE}
                  fontWeight="bold"
                  fontSize="16px"
                  color="#FF5F1F"
                  padding="2px"
                >
                  {`${priceReduced}€`}
                </Text>
              )}
            </Box>
          </Box>

          <Box mt={2} w="full">
            <Button
              className={classnames.PRODUCT_DETAILS.BUY_BUTTON}
              as={isLocked ? 'div' : Link}
              height="48px"
              w="full"
              p={1}
              isDisabled={isLocked}
              bg="black"
              _hover={{
                bg: 'black',
              }}
              {...(isLocked ? {} : { to: `/shipping/${id}` })}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Text
                  className={classnames.PRODUCT_DETAILS.BUY_BUTTON_TEXT}
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
        </VStack>
      </GridItem>
    </Grid>
  </Box>
);
