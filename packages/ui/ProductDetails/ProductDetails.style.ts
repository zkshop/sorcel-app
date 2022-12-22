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
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
    margin-top: 32px !important;
    border-radius: ${theme?.radii['2xl']};
  `,
);
