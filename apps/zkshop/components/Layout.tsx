import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { GridLayout, Banner, CartItem } from 'ui';

import { NavBar } from './NavBar';

type LayoutProps = {
  children: React.ReactNode;
};

const pageWithOutGridLayout = ['/iframe'];

export const Layout = ({ children, ...props }: LayoutProps) => {
  const { asPath } = useRouter();
  const withLayout = asPath == '/iframe';
  const withGridLayout = !pageWithOutGridLayout.includes(asPath);

  if (withLayout) {
    return <> {children} </>;
  }

  return (
    <Box {...props}>
      <NavBar admin={asPath === '/admin'} />

      <Banner />

      {withGridLayout ? <GridLayout> {children} </GridLayout> : children}
    </Box>
  );
};
