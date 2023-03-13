import type { FormatedProductData } from '@3shop/types';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { TBWProductCard } from '../TBWProductCard/TBWProductCard';

type TBWProductCardListProps = {
  products: FormatedProductData[];
};

const CLASSNAME = 'tbw-product-card-list';

const templateColumns = {
  xs: 'repeat(2, 1fr)',
  sm: 'repeat(3, 1fr)',
  md: 'repeat(3, 1fr)',
};

export const TBWProductCardList = ({ products }: TBWProductCardListProps) => (
  <Box
    className={CLASSNAME}
    sx={{
      maxW: '768px',
      margin: '0 auto',
    }}
  >
    <Grid gap={3} templateColumns={templateColumns}>
      {products?.map(
        ({
          id,
          name,
          price,
          priceReduced,
          image,
          discount,
          description,
          externalLink,
          isLocked,
          targetAttribute,
          utility,
          webhookUrl,
        }) => (
          <GridItem key={`products-${id}`} display="flex" justifyContent="center">
            <TBWProductCard
              id={id}
              name={name}
              description={description}
              image={image}
              price={price}
              discount={discount}
              priceReduced={priceReduced}
              externalLink={externalLink}
              isLocked={isLocked}
              targetAttribute={targetAttribute}
              utility={utility}
              webhookUrl={webhookUrl}
            />
          </GridItem>
        ),
      )}
    </Grid>
  </Box>
);
