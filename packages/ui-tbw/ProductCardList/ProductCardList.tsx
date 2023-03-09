import { Box, Grid, GridItem } from '@chakra-ui/react';
import { ProductCard } from '../ProductCard/ProductCard';

export type FormatedProductData = {
  id?: string;
  name: string;
  description?: any;
  image: string;
  price: number;
  discount?: number;
  priceReduced?: number;
  collection?: string;
  poapUrl?: string;
  poapImgUrl?: string;
  externalLink?: string;
  isLocked?: boolean;
  isAnHolder?: boolean;
  highlight?: boolean;
  targetAttribute?: string;
  isWithHref?: boolean;
  isNFTParisModal?: boolean;
};

type ProductCardListProps = {
  products: FormatedProductData[];
};

const CLASSNAME = 'tbw-product-card-list';

const templateColumns = {
  xs: 'repeat(2, 1fr)',
  sm: 'repeat(3, 1fr)',
  md: 'repeat(3, 1fr)',
};

export const ProductCardList = ({ products }: ProductCardListProps) => (
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
          highlight,
          isLocked,
          targetAttribute,
          isNFTParisModal,
        }) => (
          <GridItem key={`products-${id}`} display="flex" justifyContent="center">
            <ProductCard
              id={id}
              name={name}
              description={description}
              image={image}
              price={price}
              discount={discount}
              priceReduced={priceReduced}
              externalLink={externalLink}
              highlight={highlight}
              isLocked={isLocked}
              isNFTParisModal={isNFTParisModal}
              targetAttribute={targetAttribute}
            />
          </GridItem>
        ),
      )}
    </Grid>
  </Box>
);
