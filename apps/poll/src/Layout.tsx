import { Grid, GridItem, Heading } from '@3shop/ui';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Grid h="100vh" templateRows="repeat(10, 1fr)">
      <GridItem
        display="flex"
        alignItems="center"
        justifyContent="center"
        rowSpan={1}
        borderBottom="solid 1px black"
      >
        <Heading verticalAlign="center">Human Divergence Poll</Heading>
      </GridItem>
      <GridItem rowSpan={9} padding={15}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default Layout;
