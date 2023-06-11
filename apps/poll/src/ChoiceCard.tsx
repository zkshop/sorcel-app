import type { WithChildren } from '@3shop/types';
import { VStack, styled } from '@3shop/ui';
import {
  CHOICE_CARD_BACKGROUND_COLOR,
  CHOICE_CARD_BORDER_RADIUS,
  CHOICE_CARD_COLOR,
} from './constant';

const ChoiceCardContainer = styled(VStack)`
  background-color: ${CHOICE_CARD_BACKGROUND_COLOR};
  color: ${CHOICE_CARD_COLOR};
  border-radius: ${CHOICE_CARD_BORDER_RADIUS};
  overflow: hidden;

  @media (max-width: 1440px) {
    flex-basis: 16%;
  }

  @media (max-width: 1024px) {
    flex-basis: 20%;
  }

  @media (max-width: 768px) {
    flex-basis: 25%;
  }

  @media (max-width: 425px) {
    flex-basis: 49%;
  }
`;

export const ChoiceCard = ({ children }: WithChildren<object>) => (
  <ChoiceCardContainer>{children}</ChoiceCardContainer>
);
