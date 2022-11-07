import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { NavBar } from './NavBar';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children, ...props }: LayoutProps) => {
  const { asPath } = useRouter();

  return (
    <Box {...props}>
      <NavBar admin={asPath === '/admin'} />

      <Box mt="32px">{children}</Box>
    </Box>
  );
};
