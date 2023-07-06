import { Grid, GridItem, SignupSection } from '@3shop/ui';

export const Signup = () => (
  <Grid minW="calc(100vw - --chakra-sizes-0.5)" minH="calc(100vh)" templateColumns="repeat(3, 1fr)">
    <GridItem paddingX={14} paddingY={5} colSpan={1}>
      <SignupSection />
    </GridItem>
    <GridItem bgColor="#D9D9D9" colSpan={2} />
  </Grid>
);
