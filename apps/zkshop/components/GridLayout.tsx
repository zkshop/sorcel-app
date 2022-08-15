import { Box } from "@chakra-ui/react";

type GridLayoutProps = {
  children: React.ReactNode;
  sx?: any;
};

export const GridLayout = ({ children, sx, ...props }: GridLayoutProps) => {
  return (
    <Box
      sx={{
        ...sx,
        m: "0 auto",
        width: "100%",
        maxWidth: 1024, // TODO: change to 1440px
        px: { xs: 4, md: 8, lg: 8 },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
