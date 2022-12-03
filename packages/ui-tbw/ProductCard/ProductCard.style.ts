import { css } from '@emotion/react';
import { Theme } from '@chakra-ui/react';

import styled from '@emotion/styled';

type StyledProductCardProps = {
  theme?: Theme;
  highlight?: boolean;
};

export const StyledProductCard = styled('div')(
  ({ highlight }: StyledProductCardProps) => css`
    position: relative;
    width: 100%;
    border: 1px solid #000000;
    border-radius: 6px;
    overflow: hidden;
    font-family: 'Avenir';
    text-transform: 'capitalize';

    ${highlight &&
    css`
      background: #101238;
      box-shadow: 4px 6px 9px #14ffd5;
      color: white;
    `}
  `,
);
