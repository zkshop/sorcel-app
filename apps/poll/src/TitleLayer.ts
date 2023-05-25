import { Box, styled } from '@3shop/ui';
import { CHOICE_CARD_BORDER_RADIUS } from './constant';

export const TitleLayer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: rgba(0, 0, 0, 0.69);
  padding: 2rem;
  border-radius: ${CHOICE_CARD_BORDER_RADIUS};

  @media (max-width: 425px) {
    display: none;
  }
`;
