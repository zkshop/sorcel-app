import { Button, Grid, GridItem } from '@3shop/ui';
import { ConnectWalletButton } from '@3shop/wallet';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate('/');
  }

  return (
    <Button onClick={goBack} background="#383838" position="fixed" left={4} bottom={4}>
      Back
    </Button>
  );
};

function Layout() {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <Grid h="100vh" templateRows="repeat(10, 1fr)" position="relative">
      <GridItem
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        overflow="hidden"
        rowSpan={1}
        paddingX={15}
      >
        <ConnectWalletButton />
      </GridItem>
      <GridItem rowSpan={9} padding={15}>
        <Outlet />
      </GridItem>

      {!isHome && <BackButton />}
    </Grid>
  );
}

export default Layout;
