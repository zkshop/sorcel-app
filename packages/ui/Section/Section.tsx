import type { StackProps } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';

type FormStackProps = {
  children: React.ReactNode;
  width?: string;
} & StackProps;

export const Section = ({ children, width = 'full', sx }: FormStackProps) => (
  <Stack
    width={width}
    mt={4}
    spacing={3}
    borderRadius="lg"
    p={8}
    border="1px solid lightgrey"
    sx={sx}
  >
    {children}
  </Stack>
);
