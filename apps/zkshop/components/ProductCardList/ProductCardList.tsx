import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import Image from "next/image";

import { useAppSelector } from "../../store/store";
import { ProductCard } from "../ProductCard/ProductCard";

type ProductCardListProps = {
  products: Product[];
};

type Product = {
  __typename?: "product" | undefined;
  app_id: any;
  collection?: any;
  curation?: any;
  id: any;
  discount?: any;
  image?: any;
  name: string;
  price: any;
};

export const ProductCardList = ({ products }: ProductCardListProps) => {
  const nfts = useAppSelector((state) => state.nfts);
  const collections = nfts.map((nft) => nft.contract.address);
  const isAnHolder = products.some((product: Product) =>
    collections.includes(product?.curation?.toLowerCase())
  );

  return (
    <Box py={8}>
      <VStack pb={8}>
        <Image
          height={80}
          width={750}
          src="/images/misfitwear.jpg"
          alt="misfitwear"
          style={{
            borderRadius: "16px",
          }}
        />
      </VStack>

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
              <GridItem
                key={`products-${id}`}
                display="flex"
                justifyContent="center"
              >
                <ProductCard
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
