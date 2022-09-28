import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { SismoBanner, MenuDrawer } from "ui";

import ConnectWalletButton from "./ConnectWalletButton";

type NavBarProps = {
  admin: boolean;
};

export const NavBar = ({ admin }: NavBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack as="header" sx={{ px: { xs: 2, md: 4, lg: 6 } }}>
      <HStack w="full">
        <Button mr={4} bgColor="white" onClick={onOpen}>
          <HamburgerIcon w={8} h={8} />
        </Button>

        <MenuDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

        <HStack justifyContent="space-between" flex={1}>
          <Link href="/">
            <Text
              as="h1"
              sx={{
                fontSize: "5xl",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  background: "-webkit-linear-gradient(#0987A0, #805AD5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Zk
              </span>
              Shop
            </Text>
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
};
