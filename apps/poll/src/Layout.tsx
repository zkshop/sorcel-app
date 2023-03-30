import { Grid, GridItem, Heading } from '@3shop/ui';
import { ConnectWalletButton } from '@3shop/wallet';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Grid h="100vh" templateRows="repeat(10, 1fr)">
      <GridItem
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        rowSpan={1}
        paddingX={15}
        borderBottom="solid 1px black"
      >
        <Heading verticalAlign="center">Human Divergence Poll</Heading>
        <ConnectWalletButton />
      </GridItem>
      <GridItem rowSpan={9} padding={15}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default Layout;
