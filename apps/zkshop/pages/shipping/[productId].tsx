import { HStack, VStack } from "@chakra-ui/react";
import { ShippingFormContainer } from "modules";

const ShippingPage = () => {
  return (
    <>
      <HStack>
        <VStack flex={1} border="solid 1px black">
          <span>Product details</span>
        </VStack>
        <VStack flex={1}>
          <ShippingFormContainer />
        </VStack>
      </HStack>
    </>
  );
};

export default ShippingPage;
