import { Box } from "@chakra-ui/react";
import { Banner } from "./Banner";
import { GridLayout } from "./GridLayout";
import { NavBar } from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <Box
      {...props}
      sx={{ display: "flex", flexDirection: "column", height: "inherit" }}
    >
      <NavBar admin={false} />

      <Banner />

      <GridLayout>{children}</GridLayout>
    </Box>
  );
};
