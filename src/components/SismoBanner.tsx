import { HStack, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

const SismoBanner = () => {
  return (
    <Link href="https://sandbox.sismo.io/misfitwear" isExternal>
      <HStack mt={2}>
        <Image height={24} width={24} src="/images/sismo.jpeg" alt="Sismo" />
        <Text>Connect your wallet owning Sismo attestations</Text>
      </HStack>
    </Link>
  );
};

export default SismoBanner;
