import { Heading, HStack } from '@chakra-ui/react';

import type { WithOptionalChildren } from 'types';

type HeaderProps = WithOptionalChildren<{ title: string }>;

export const Header = ({ title, children }: HeaderProps) => (
  <Heading as="h2">
    <HStack justifyContent="space-between">
      <span> {title} </span>
      {children}
    </HStack>
  </Heading>
);
