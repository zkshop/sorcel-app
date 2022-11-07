import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MainLayout, Banner } from 'ui';

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
    <Box {...props} sx={{ p: 6 }}>
      <NavBar admin={asPath === '/admin'} />

      {withMainLayout ? <MainLayout> {children} </MainLayout> : children}
    </Box>
  );
};
