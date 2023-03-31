import type { WithChildren } from '@3shop/types';
import { VStack } from '@3shop/ui';
import {
  CHOICE_CARD_BACKGROUND_COLOR,
  CHOICE_CARD_BORDER_RADIUS,
  CHOICE_CARD_COLOR,
} from './constant';

export const Card = ({ children }: WithChildren<object>) => (
  <VStack
    flex={1}
    backgroundColor={CHOICE_CARD_BACKGROUND_COLOR}
    color={CHOICE_CARD_COLOR}
    borderRadius={CHOICE_CARD_BORDER_RADIUS}
    paddingBottom={4}
    overflow="hidden"
  >
    {children}
  </VStack>
);
