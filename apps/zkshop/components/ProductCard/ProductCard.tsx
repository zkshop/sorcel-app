import { Box, Text, Button, Image } from "@chakra-ui/react";
import StaticImage from "next/image";
import Link from "next/link";

import addButton from "../../public/images/add-button.png";
import { CollectionBadge } from "./CollectionBadge";

interface ProductCardProps {
  id?: string;
  srcItem: string;
  title: string;
  discount?: string;
  price: string;
  collection: string;
  isTransparent: boolean;
  isEligible: boolean | string;
}

export const ProductCard = ({
  srcItem,
  title,
  discount,
  price,
  collection,
  isTransparent,
  isEligible,
  id,
}: ProductCardProps) => {
  const princeNumber = parseInt(price);
  const discountNumber = discount ? parseInt(discount) : 0;

  const promoPercent = discount ? discountNumber / 100 : 0;
  const priceReduced = discount
    ? princeNumber - princeNumber * promoPercent
    : 0;

  return (
    <Link href={`product/${id}`}>
      <Box
        cursor="pointer"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        bg="white"
        width="100%"
        borderRadius="10px"
        position={"relative"}
        _before={
          isEligible
            ? {
                content: '""',
                zIndex: -1,
                position: "absolute",
                top: "-12px",
                right: "-12px",
                bottom: "-12px",
                left: "-12px",
                background:
                  "linear-gradient(to right, var(--chakra-colors-bannerLeft) , var(--chakra-colors-bannerRight))",
                transition: "opacity 0.3s",
                borderRadius: "inherit",
                filter: "blur(5px)",
                opacity: 0.9,
              }
            : {}
        }
        _after={
          isEligible
            ? {
                content: '""',
                zIndex: -1,
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background: "inherit",
                borderRadius: "inherit",
              }
            : {}
        }
      >
        {isTransparent && (
          <>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                opacity: 0.4,
                borderRadius: "10px",
              }}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              bgGradient="linear(to-r, #0987A0, #805AD5)"
            />
            <Text
              px={1}
              position={"absolute"}
              top={90}
              textAlign="center"
              color={"white"}
              fontWeight="bold"
            >
              Connect your {collection || "Misfitwear"} wallet to unlock
            </Text>

            <CollectionBadge CollectionName={collection || "Misfitwear"} />
          </>
        )}
        <Box padding="8px">
          <Box borderRadius="10px" height="200px">
            <Image alt="product" height="100%" width="100%" src={srcItem} />
          </Box>
          <Text
            fontWeight="bold"
            fontSize="12px"
            color="black"
            marginTop="4px"
            padding="2px"
          >
            {title}
          </Text>
          {discount ? (
            <Box
              border="1px gray solid"
              width="50px"
              borderRadius="10px"
              padding="2px"
              marginTop="4px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                fontWeight="bold"
                fontSize="12px"
                color="black"
                padding="2px"
              >
                {`-${discount}%`}
              </Text>
            </Box>
          ) : (
            <Box height="32px" />
          )}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
            marginTop="8px"
          >
            <Box display="flex">
              <Text
                fontWeight="bold"
                fontSize="14px"
                color="black"
                padding="2px"
                textDecoration={discount ? "line-through" : "none"}
                marginRight={discount ? "2px" : "none"}
              >
                {`${price}$`}
              </Text>
              {discount && (
                <Text
                  fontWeight="bold"
                  fontSize="14px"
                  color="#FF5F1F"
                  padding="2px"
                >
                  {`${priceReduced}$`}
                </Text>
              )}
            </Box>
            <Button
              height="30px"
              width="70px"
              borderRadius="10px"
              padding="2px"
              isDisabled={isTransparent}
              bg="#DF00FF"
              _hover={{ bg: "#FF5F1F" }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  fontWeight="bold"
                  fontSize="14px"
                  color="white"
                  marginRight="4px"
                >
                  Buy
                </Text>
                <Box borderRadius="10px" display="flex">
                  <StaticImage height="20" width="20" src={addButton} />
                </Box>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
