import { Box, MainLayout } from '@3shop/ui';
import { NavBar } from './modules/navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children, ...props }: LayoutProps) => (
  <Box {...props}>
    <NavBar />

    <MainLayout>{children}</MainLayout>
  </Box>
);
