import {
  Box,
  HStack,
  Spacer,
  Text,
  Image,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ConnectWalletButton from "./ConnectWalletButton";
import { HamburgerIcon } from "@chakra-ui/icons";

import SismoBanner from "./SismoBanner";
import useGetAppProducts from "../hooks/useGetAppProducts";
import Link from "next/link";

export const NavBar = ({ admin }: { admin: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { app } = useGetAppProducts("ukwyvv9vMiB66hiEaoRF");

  return (
    <HStack as="header" sx={{ h: 24, px: { xs: 2, md: 4, lg: 6 } }}>
      <Button mr={4} bgColor="white" onClick={onOpen}>
        <HamburgerIcon w={8} h={8} />
      </Button>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">ZkShop</DrawerHeader>
          <DrawerBody display={"flex"} flexDirection={"column"}>
            <Box mt={6}>
              <Button onClick={onClose}>
                <Link href="/">Misfitwear Shop</Link>
              </Button>
            </Box>

            <Box mt={4}>
              <Button onClick={onClose}>
                <Link href="/admin">Admin</Link>
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Image alt="logo" src="/svg/vite.svg" mr="2" />

      <Text as="h1" fontSize="5xl">
        ZkShop
      </Text>

      <Spacer />

      {!admin && (
        <Box display="flex" alignItems="center" flexDirection="column" py={8}>
          <ConnectWalletButton />
          {app !== null && app.sismo && <SismoBanner />}
        </Box>
      )}
    </HStack>
  );
};
