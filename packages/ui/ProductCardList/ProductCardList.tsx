import { Box, Grid, GridItem } from '@chakra-ui/react';
import { ProductCard } from '@3shop/ui';
import type { FormatedProductData } from '@3shop/types';
import { classnames } from '@3shop/config';

type ProductCardListProps = {
  products: FormatedProductData[];
};

const templateColumns = {
  xs: 'repeat(1, 1fr)',
  sm: 'repeat(2, 1fr)',
  md: 'repeat(3, 1fr)',
};

export const ProductCardList = ({ products }: ProductCardListProps) => (
  <Box className={classnames.PRODUCT_CARD_LIST}>
    <Grid gap={8} templateColumns={templateColumns}>
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
          <GridItem key={`products-${id}`} display="flex" justifyContent="center">
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
