import { Box, Grid, GridItem } from '@chakra-ui/react';
import type { FormatedProductData } from '@3shop/types';
import { classnames } from '@3shop/config';
import { ProductCard } from '../ProductCard/ProductCard';

type ProductCardListProps = {
  products: FormatedProductData[];
};

const templateColumns = {
  xs: 'repeat(2, 1fr)',
  sm: 'repeat(3, 1fr)',
  md: 'repeat(4, 1fr)',
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
          title,
          collection,
          isLocked,
          poapUrl,
          poapImgUrl,
          price,
          priceReduced,
          srcItem,
          discount,
          isWithHref,
        }) => (
          <GridItem
            key={`products-${id}`}
            className={classnames.PRODUCT_CARD_LIST.GRID_ITEM}
            display="flex"
            justifyContent="center"
          >
            <ProductCard
              id={id}
              title={title}
              discount={discount}
              srcItem={srcItem}
              price={price}
              priceReduced={priceReduced}
              poapUrl={poapUrl}
              poapImgUrl={poapImgUrl}
              isLocked={isLocked}
              collection={collection}
              isWithHref={isWithHref}
            />
          </GridItem>
        ),
      )}
    </Grid>
  </Box>
);
