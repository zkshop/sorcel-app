import { Box, Grid, GridItem } from '@chakra-ui/react';
import { ProductCard } from 'ui';
import { FormatedProductData } from 'types';

type ProductCardListProps = {
  products: FormatedProductData[];
};

export const ProductCardList = ({ products }: ProductCardListProps) => (
  <Box>
    <Grid
      gap={8}
      sx={{
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
        },
      }}
    >
      {products.map(
        ({
          id,
          title,
          collection,
          isAnHolder,
          isTransparent,
          poapUrl,
          poapImgUrl,
          price,
          srcItem,
          discount,
        }) => (
          <GridItem key={`products-${id}`} display="flex" justifyContent="center">
            <ProductCard
              id={id}
              title={title}
              discount={discount}
              srcItem={srcItem}
              price={price}
              poapUrl={poapUrl}
              poapImgUrl={poapImgUrl}
              isAnHolder={isAnHolder}
              isTransparent={isTransparent}
              collection={collection}
            />
          </GridItem>
        ),
      )}
    </Grid>
  </Box>
);
