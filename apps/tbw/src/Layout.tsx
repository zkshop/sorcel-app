import { Box } from 'ui-tbw';
import { NavBar } from './modules/navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children, ...props }: LayoutProps) => (
  <Box {...props}>
    <NavBar />

    <Box mt="32px">{children}</Box>
  </Box>
);
