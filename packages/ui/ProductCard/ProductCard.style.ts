import { css } from '@emotion/react';
import type { Theme } from '@chakra-ui/react';

import styled from '@emotion/styled';

type StyledProductCardProps = {
  theme?: Theme;
};

export const StyledProductCard = styled('div')(
  ({ theme }: StyledProductCardProps) => css`
    position: relative;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 32px !important;
    width: 100%;
    border-radius: ${theme?.radii['2xl']};
  `,
);
