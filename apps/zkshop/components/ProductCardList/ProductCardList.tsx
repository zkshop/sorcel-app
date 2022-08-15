import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useAppSelector } from "../../store/store";
import { ProductCard } from "../ProductCard/ProductCard";

type ProductCardListProps = {
  products: Product[];
};

type Product = {
  image: string;
  name: string;
  discount: string;
  price: string;
  collection: string;
  curation: string;
  id: string;
};

export const ProductCardList = ({ products }: ProductCardListProps) => {
  const nfts = useAppSelector((state) => state.nfts);
  const collections = nfts.map((nft) => nft.contract.address);
  const isAnHolder = products.some((product: Product) =>
    collections.includes(product.curation.toLowerCase())
  );

  return (
    <Box py={8}>
      <Grid
        gap={8}
        sx={{
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
        }}
      >
        {products.map(
          ({
            image,
            name,
            discount,
            price,
            collection,
            curation,
            id,
          }: Product) => {
            const isTransparent =
              curation && !collections.includes(curation.toLowerCase());

            return (
              <GridItem display={"flex"} justifyContent={"center"}>
                <ProductCard
                  key={`products-${id}`}
                  id={id}
                  srcItem={image}
                  title={name}
                  discount={isAnHolder && discount ? discount : undefined}
                  price={price}
                  collection={collection}
                  isTransparent={isTransparent || false}
                  isEligible={curation && isAnHolder}
                />
              </GridItem>
            );
          }
        )}
      </Grid>
    </Box>
  );
};
