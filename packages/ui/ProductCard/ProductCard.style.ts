import { css } from '@emotion/react';
import type { Theme } from '@chakra-ui/react';

import styled from '@emotion/styled';

type StyledProductCardProps = {
  theme?: Theme;
};

export const StyledProductCard = styled('div')(
  ({}: StyledProductCardProps) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
);
