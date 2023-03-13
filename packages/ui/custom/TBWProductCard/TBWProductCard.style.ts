import { css } from '@emotion/react';
import type { Theme } from '@chakra-ui/react';

import styled from '@emotion/styled';

type StyledTBWProductCardProps = {
  theme?: Theme;
};

export const StyledTBWProductCard = styled('div')(
  ({}: StyledTBWProductCardProps) => css`
    position: relative;
    width: 100%;
    border: 1px solid #000000;
    border-radius: 6px;
    overflow: hidden;
    font-family: 'Avenir';
    text-transform: 'capitalize';
  `,
);
