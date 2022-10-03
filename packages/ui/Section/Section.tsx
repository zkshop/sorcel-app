import { Stack, StackProps } from '@chakra-ui/react';

type FormStackProps = {
  children: React.ReactNode;
  width?: string;
} & StackProps;

export const Section = ({ children, width = 'full', sx }: FormStackProps) => (
  <Stack
    width={width}
    mt={8}
    spacing={3}
    backgroundColor="white"
    sx={{
      borderRadius: '8px',
      p: 8,
      border: '1px solid lightgrey',
      ...sx,
    }}
  >
    {children}
  </Stack>
);
