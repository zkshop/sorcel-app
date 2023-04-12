import { styled } from '@3shop/ui';
import { Image as ChakraImage } from '@chakra-ui/react';
import { CHOICE_CARD_BORDER_RADIUS } from './constant';

type ImageProps = {
  src?: string;
  isLocked: boolean;
};

const DEFAULT_IMAGE = 'choices_background.png';

const StyledImage = styled(ChakraImage)`
  @media (max-width: 1440px) {
    max-height: 80%;
  }

  @media (max-width: 1024px) {
    max-height: 100%;
  }

  max-height: 600px;

  object-fit: cover;
`;

export const PollImage = ({ src = DEFAULT_IMAGE, isLocked: isLocked }: ImageProps) => (
  <StyledImage isLocked={isLocked} src={src} borderTopRadius={CHOICE_CARD_BORDER_RADIUS} />
);
