import { Button, Heading, HStack } from "@chakra-ui/react";

import { WithOptionalChildren } from "../libs/types/utils";

type HeaderProps = WithOptionalChildren<{ title: string }>;

const Header = ({ title, children }: HeaderProps) => (
  <Heading as="h2">
    <HStack justifyContent="space-between">
      <span>{title}</span>
      {children}
    </HStack>
  </Heading>
);

export default Header;
