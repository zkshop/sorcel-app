import { Box, Grid, GridItem } from '@chakra-ui/react';
import type { FormatedProductData } from '@3shop/types';
import { classnames } from '@3shop/config';
import { ProductCard } from '../ProductCard/ProductCard';

type ProductCardListProps = {
  products: FormatedProductData[];
};

const templateColumns = {
  xs: 'repeat(2, 1fr)',
  md: 'repeat(3, 1fr)',
  lg: 'repeat(4, 1fr)',
};

export const ProductCardList = ({ products }: ProductCardListProps) => (
  <Box className={classnames.PRODUCT_CARD_LIST.CONTAINER}>
    <Grid
      className={classnames.PRODUCT_CARD_LIST.GRID}
      templateColumns={templateColumns}
      gridRowGap={6}
      gridColumnGap={3}
    >
      {products.map(
        ({
          id,
          name,
          image,
          price,
          discount,
          priceReduced,
          collection,
          poapImgUrl,
          isLocked,
          utility,
          webhookUrl,
        }) => (
          <GridItem
            key={`products-${id}`}
            className={classnames.PRODUCT_CARD_LIST.GRID_ITEM}
            display="flex"
            justifyContent="center"
          >
            <ProductCard
              id={id}
              name={name}
              image={image}
              price={price}
              discount={discount}
              priceReduced={priceReduced}
              collectionName={collection}
              poapImgUrl={poapImgUrl}
              isLocked={isLocked}
              utility={utility}
              webhookUrl={webhookUrl}
            />
          </GridItem>
        ),
      )}
    </Grid>
  </Box>
);
