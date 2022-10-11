import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

type StyledProductDetailsProps = {
  theme?: Theme;
  isEligible: boolean;
};

export const StyledProductDetails = styled.div(
  ({ theme, isEligible }: StyledProductDetailsProps) => css`
    position: relative;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
    margin-top: 32px !important;

    :before {
      ${
        isEligible &&
        css`
          content: '';
          z-index: -1;
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
          content: '';
          zindex: -1;
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
