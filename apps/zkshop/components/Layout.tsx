import { Box } from "@chakra-ui/react";
import { Banner } from "./Banner";
import { GridLayout } from "./GridLayout";
import { NavBar } from "./NavBar";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children, ...props }: LayoutProps) => {
  const { asPath } = useRouter();

  return (
    <Box {...props}>
      <NavBar admin={asPath === "/admin"} />

      <Banner />

      {children}
    </Box>
  );
};
