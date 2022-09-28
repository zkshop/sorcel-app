import { Stack } from "@chakra-ui/react";

type FormStackProps = {
  children: React.ReactNode;
  width?: string;
};

const sx = {
  bg: "white",
  borderRadius: "8px",
  p: 8,
  border: "1px solid lightgrey",
};

export const Section = ({ children, width }: FormStackProps) => (
  <Stack width={width} mt={8} spacing={3} sx={sx}>
    {children}
  </Stack>
);
