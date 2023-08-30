import { Box, Grid } from '@chakra-ui/react';

import { classnames } from '@3shop/config';

import React from 'react';

type ProductCardListProps = {
  children: React.ReactNode;
};

const templateColumns = {
  xs: 'repeat(2, 1fr)',
  md: 'repeat(3, 1fr)',
  lg: 'repeat(4, 1fr)',
};

export const ProductCardList = ({ children }: ProductCardListProps) => (
  <Box className={classnames.PRODUCT_CARD_LIST.CONTAINER}>
    <Grid
      className={classnames.PRODUCT_CARD_LIST.GRID}
      templateColumns={templateColumns}
      gridRowGap={6}
      gridColumnGap={3}
    >
      {children}
    </Grid>
  </Box>
);
