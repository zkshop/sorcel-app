import { HStack, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';

type SismoBannerProps = {
  admin: boolean;
  enable: boolean;
};

export const SismoBanner = ({ admin, enable }: SismoBannerProps) => {
  if (admin || !enable) return null;

  return (
    <HStack
      sx={{
        mt: 2,
        pb: 2,
        w: 'full',
        justifyContent: 'flex-end',
      }}
    >
      <Link href="https://sandbox.sismo.io/misfitwear" isExternal>
        <HStack>
          <Image height={20} width={20} src="/images/sismo.jpeg" alt="Sismo" />

          <Text as="u" fontSize="14px" fontWeight="bold">
            ZkProof with Sismo
          </Text>
        </HStack>
      </Link>
    </HStack>
  );
};
