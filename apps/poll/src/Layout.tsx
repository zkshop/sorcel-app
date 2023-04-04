import { Grid, GridItem, Image } from '@3shop/ui';
import { ConnectWalletButton } from '@3shop/wallet';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Grid h="100vh" templateRows="repeat(10, 1fr)">
      <GridItem
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        overflow="hidden"
        rowSpan={1}
        paddingX={15}
      >
        <Link to="/">
          <Image maxWidth={120} src="icon.png" />
        </Link>
        <ConnectWalletButton />
      </GridItem>
      <GridItem rowSpan={9} padding={15}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default Layout;
