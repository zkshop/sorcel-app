import { HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

type BackButtonProps = {
  text?: string;
  href: string;
};

export const BackButton = ({ text = 'Go back', href }: BackButtonProps) => (
  <Link href={href}>
    <HStack sx={{ w: '100%', cursor: 'pointer', mb: 4, textDecoration: 'underline' }}>
      <AiOutlineArrowLeft />

      <Text fontSize="14px" fontWeight="bold">
        {text}
      </Text>
    </HStack>
  </Link>
);
