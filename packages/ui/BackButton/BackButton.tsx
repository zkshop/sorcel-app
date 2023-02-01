import { HStack } from '@chakra-ui/react';
import { OutlineArrowLeftIcon } from '../Icons';
import { Link } from 'react-router-dom';
import { Text } from '../Text/Text';

type BackButtonProps = {
  text?: string;
  href: string;
};

export const BackButton = ({ text = 'Go back', href }: BackButtonProps) => (
  <HStack as={Link} to={href} w="full" cursor="pointer" textDecoration="underline">
    <OutlineArrowLeftIcon />

    <Text fontSize="14px" fontWeight="bold" py={2}>
      {text}
    </Text>
  </HStack>
);
