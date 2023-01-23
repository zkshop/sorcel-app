import { css } from '@emotion/react';
import type { Theme } from '@3shop/ui';

import styled from '@emotion/styled';

type StyledProductCardProps = {
  theme?: Theme;
};

export const StyledProductCard = styled('div')(
  ({ theme }: StyledProductCardProps) => css`
    position: relative;
    color: ${theme?.colors.secondary};
    background-color: ${theme?.colors.primary};
    box-shadow: ${theme?.shadows.base};
    margin-top: ${theme?.space[8]} !important;
    width: 100%;
    border-radius: ${theme?.radii.md};
  `,
);
