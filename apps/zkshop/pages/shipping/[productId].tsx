import { HStack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Button } from "ui";

const ShippingPage = () => {
  const router = useRouter();

  const goToCheckout = () => {
    router.push(router.asPath.replace("shipping", "checkout"));
  };

  return (
    <>
      <HStack>
        <VStack flex={1} border="solid 1px black">
          <span>Product details</span>
        </VStack>
        <VStack flex={1} border="solid 1px black">
          <span>Shipping Form</span>
        </VStack>
      </HStack>
      <Button mt={3} onClick={goToCheckout}>
        Go to checkout
      </Button>
    </>
  );
};

export default ShippingPage;
