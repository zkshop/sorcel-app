import { Box, MainLayout, Banner } from 'ui';
import { useRouter } from 'next/router';

import { NavBar } from './NavBar';

type LayoutProps = {
  children: React.ReactNode;
};

const pageWithOutGridLayout = ['/iframe'];

export const Layout = ({ children, ...props }: LayoutProps) => {
  const { asPath } = useRouter();
  const withLayout = asPath == '/iframe';
  const withMainLayout = !pageWithOutGridLayout.includes(asPath);

  if (withLayout) {
    return <> {children} </>;
  }

  return (
    <Box {...props}>
      <NavBar admin={asPath === '/admin'} />

      <Banner />

      {withMainLayout ? <MainLayout> {children} </MainLayout> : children}
    </Box>
  );
};
