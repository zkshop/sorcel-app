import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { SismoBanner, MenuDrawer } from "ui";

import ConnectWalletButton from "./ConnectWalletButton";

type NavBarProps = {
  admin: boolean;
};

export const NavBar = ({ admin }: NavBarProps) => (
  // const { isOpen, onOpen, onClose } = useDisclosure();

  <VStack as="header" sx={{ py: 3, px: { xs: 2, md: 4, lg: 6 } }}>
    <HStack w="full">
      {/* <Button mr={4} bgColor="white" onClick={onOpen}>
          <HamburgerIcon w={8} h={8} />
        </Button> */}

      {/* <MenuDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}

      <HStack justifyContent="space-between" flex={1}>
        <Link href="/">
          <Image
            height={70}
            width={210}
            src="/images/3shop-logo.png"
            alt="3shop"
            style={{ cursor: "pointer" }}
          />
        </Link>

        {!admin && (
          <Box display="flex" alignItems="center" flexDirection="column">
            <ConnectWalletButton />
          </Box>
        )}
      </HStack>
    </HStack>

    <SismoBanner admin={admin} enable={false} />
  </VStack>
);
