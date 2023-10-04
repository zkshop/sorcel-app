import { HStack } from '@chakra-ui/react';

import type { WithOptionalChildren } from '@3shop/types';
import { Heading } from '../Heading/Heading';

type HeaderProps = WithOptionalChildren<{ title: string }>;

export const Header = ({ title, children }: HeaderProps) => (
  <HStack justifyContent="space-between">
    <Heading as="h2" mb={2}>
      {title}
    </Heading>
    {children}
  </HStack>
);
