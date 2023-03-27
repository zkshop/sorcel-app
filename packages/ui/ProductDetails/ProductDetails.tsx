import { Box, Button, VStack, Image, Grid, GridItem, useToast } from '@chakra-ui/react';
import { TriangleUpIcon } from '../Icons';
import { LockedLayer } from '../LockedLayer/LockedLayer';
import type { Nullable } from '@3shop/types';
import { classnames, envVars } from '@3shop/config';
import { Text } from '../Text/Text';
import type { CreateSurveyOrderMutationFn } from '@3shop/apollo';
import { getElementProps } from './getElementProps';
import { useState } from 'react';

type ProductDetailsProps = {
  id?: string;
  name: string;
  image: string;
  description?: string;
  price: number;
  discount?: Nullable<number>;
  priceReduced?: number;
  collectionName?: string;
  poapUrl?: string;
  poapImgUrl?: string;
  isLocked?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  createSurveyOrder: CreateSurveyOrderMutationFn;
  walletAddress?: string;
  userHasAlreadyOrdered?: boolean;
};

const templateColumns = {
  xs: 'repeat(1, 1fr)',
  md: 'repeat(2, 1fr)',
};

export const ProductDetails = ({
  id,
  name,
  image,
  description,
  price,
  discount,
  priceReduced,
  collectionName,
  isLocked = false,
  createSurveyOrder,
  walletAddress,
  userHasAlreadyOrdered,
}: ProductDetailsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const shippingLink = `/shipping/${id}`;
  const BUY_BUTTON_LABEL = 'BUY IT NOW';

  const handleClick = async () => {
    setIsLoading(true);
    if (!userHasAlreadyOrdered) {
      await createSurveyOrder({
        variables: {
          firstname: '-',
          lastname: '-',
          address: walletAddress?.toLocaleLowerCase() || '-',
          email: '-',
          product_id: id,
          app_id: envVars.APP_ID,
        },
        refetchQueries: ['GetOrdersByAddress'],
      });

      toast({
        status: 'success',
        title: 'Voted successfully',
        description: 'Thank you for your vote',
      });
    } else {
      toast({
        status: 'error',
        title: 'You already voted',
        description: 'You can only vote once',
      });
    }
    setIsLoading(false);
  };

  const { elementType: DynamicElement, elementProps } = getElementProps({
    isLocked,
    shippingLink,
    onClick: handleClick,
  });

  return (
    <Box className={classnames.PRODUCT_DETAILS.CONTAINER} w="full" position="relative">
      {isLocked && <LockedLayer collectionName={collectionName} size="lg" />}

      <Grid className={classnames.PRODUCT_DETAILS.GRID} templateColumns={templateColumns}>
        <GridItem className={classnames.PRODUCT_DETAILS.GRID_ITEM}>
          <Box className={classnames.PRODUCT_DETAILS.IMG_CONTAINER} mb={{ xs: 2, md: 0 }}>
            <Image
              className={classnames.PRODUCT_DETAILS.IMG}
              alt="product"
              w="full"
              h="full"
              objectFit="cover"
              src={image}
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
                textTransform="capitalize"
                width="fit-content"
              >
                {name}
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
              <Box
                className={classnames.PRODUCT_DETAILS.DISCOUNT_TAG_CONTAINER}
                border={discount ? '1px #dedde0 solid' : undefined}
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
                  {discount ? `-${discount}%` : ''}
                </Text>
              </Box>

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
                {discount ? (
                  <Text
                    className={classnames.PRODUCT_DETAILS.REDUCED_PRICE}
                    fontWeight="bold"
                    fontSize="16px"
                    color="#FF5F1F"
                    padding="2px"
                  >
                    {`${priceReduced}€`}
                  </Text>
                ) : null}
              </Box>
            </Box>

            <Box mt={2} w="full">
              <Button
                className={classnames.PRODUCT_DETAILS.BUY_BUTTON}
                as={DynamicElement}
                height="48px"
                w="full"
                p={1}
                isDisabled={isLocked}
                bg="black"
                isLoading={isLoading}
                _hover={{
                  bg: 'black',
                }}
                {...elementProps}
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
                    {BUY_BUTTON_LABEL}
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
};
