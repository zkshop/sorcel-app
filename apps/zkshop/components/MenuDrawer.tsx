import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";

type MenuDrawerProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const MenuDrawer = ({ isOpen, onOpen, onClose }: MenuDrawerProps) => {
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Text fontSize={"24px"} textTransform="uppercase">
            <span
              style={{
                background: "-webkit-linear-gradient(#0987A0, #805AD5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "26px",
              }}
            >
              Zk
            </span>
            Shop
          </Text>
        </DrawerHeader>
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

          <Box mt={4}>
            <Button onClick={onClose}>
              <Link href="/iframe-example">iframe</Link>
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
