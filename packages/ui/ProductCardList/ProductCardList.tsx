import { Box, Grid, GridItem } from '@chakra-ui/react';
import { ProductCard } from 'ui';
import { formatProductData } from './formatProductData';

type ProductCardListProps = {
  products: Product[];
  poapImageList: string[];
  collections: string[];
  poapIds: number[];
};

type Product = {
  __typename?: 'product' | undefined;
  app_id: any;
  collection?: any;
  curation?: any;
  id: any;
  discount?: any;
  image?: any;
  name: string;
  price: any;
  poapId?: any;
};

export type GetProductCardPropsParams = Product & {
  poapImageList: any[];
  poapIds: number[];
  collections: string[];
};

export const ProductCardList = ({
  products,
  collections,
  poapIds,
  poapImageList,
}: ProductCardListProps) => (
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
      {products.map((product) => {
        const {
          collection,
          isAnHolder,
          isTransparent,
          poapUrl,
          poapImgUrl,
          price,
          srcItem,
          title,
          discount,
          id,
        } = formatProductData({ ...product, poapIds, collections, poapImageList });

        return (
          <GridItem key={`products-${product.id}`} display="flex" justifyContent="center">
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
        );
      })}
    </Grid>
  </Box>
);
