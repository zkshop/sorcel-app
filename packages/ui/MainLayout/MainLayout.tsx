import { Box } from '@chakra-ui/react';

type MainLayoutProps = {
  children: React.ReactNode;
  sx?: any;
};

export const MainLayout = ({ children, sx, ...props }: MainLayoutProps) => (
  <Box
    as="main"
    sx={{
      m: '0 auto',
      width: '100%',
      maxWidth: 1024, // TODO: change to 1440px
      p: { xs: 3, md: 6, lg: 8 },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);
