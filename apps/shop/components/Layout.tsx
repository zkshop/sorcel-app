import { Box, MainLayout, Banner } from '@3shop/ui';

import { NavBar } from './NavBar';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children, ...props }: LayoutProps) => (
  <Box {...props}>
    <NavBar />
    <Banner />
    <MainLayout> {children} </MainLayout>
  </Box>
);
