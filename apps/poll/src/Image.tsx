import { styled } from '@3shop/ui';
import { Image as ChakraImage } from '@chakra-ui/react';

type ImageProps = {
  src?: string;
  isLocked: boolean;
};

const DEFAULT_IMAGE = 'choices_background.png';

const StyledImage = styled(ChakraImage)<{ isLocked: boolean }>`
  @media (max-width: 1440px) {
    max-height: 80%;
  }

  @media (max-width: 1024px) {
    max-height: 100%;
  }

  max-height: 600px;

  object-fit: cover;
  opacity: ${({ isLocked }) => (isLocked ? 0.25 : 1)};
`;

export const Image = ({ src = DEFAULT_IMAGE, isLocked: isLocked }: ImageProps) => (
  <StyledImage isLocked={isLocked} src={src} borderRadius={35} />
);
