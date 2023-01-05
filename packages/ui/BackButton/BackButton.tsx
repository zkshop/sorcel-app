import { HStack, Text } from '@chakra-ui/react';
import { OutlineArrowLeftIcon } from '../Icons';
import { Link } from 'react-router-dom';

type BackButtonProps = {
  text?: string;
  href: string;
};

export const BackButton = ({ text = 'Go back', href }: BackButtonProps) => (
  <HStack
    as={Link}
    to={href}
    sx={{ w: '100%', cursor: 'pointer', mb: 4, textDecoration: 'underline' }}
  >
    <OutlineArrowLeftIcon />

    <Text fontSize="14px" fontWeight="bold">
      {text}
    </Text>
  </HStack>
);
