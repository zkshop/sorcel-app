import { css } from '@emotion/react';
import type { Theme } from '@chakra-ui/react';

import styled from '@emotion/styled';

type StyledProductDetailsProps = {
  theme?: Theme;
};

export const StyledProductDetails = styled.div(
  ({ theme }: StyledProductDetailsProps) => css`
    position: relative;
    background-color: white;
    box-shadow: ${theme?.shadows.base};
    margin-top: 32px !important;
    border-radius: ${theme?.radii['2xl']};
  `,
);
