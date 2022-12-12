import { css } from '@emotion/react';
import type { Theme } from '@chakra-ui/react';

import styled from '@emotion/styled';

type StyledProductCardProps = {
  theme?: Theme;
  isEligible: boolean;
};

export const StyledProductCard = styled('div')(
  ({ theme, isEligible }: StyledProductCardProps) => css`
    position: relative;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 32px !important;
    width: 100%;
    border-radius: ${theme?.radii['2xl']};

    :before {
      ${
        isEligible &&
        css`
          z-index: -1;
          content: '';
          position: absolute;
          top: -12px;
          right: -12px;
          bottom: -12px;
          left: -12px;
          background: linear-gradient(
            to right,
            var(--chakra-colors-bannerLeft),
            var(--chakra-colors-bannerRight)
          );
          transition: opacity 0.3s;
          border-radius: inherit;
          filter: blur(5px);
          opacity: 0.9;
        `
      }

      :after {
      ${
        isEligible &&
        css`
          zindex: -1;
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: inherit;
        `
      }
    }
  `,
);
