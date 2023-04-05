import { styled } from '@3shop/ui';
import { Image as ChakraImage } from '@chakra-ui/react';

type ImageProps = {
  src?: string;
  isLocked: boolean;
};

const DEFAULT_IMAGE = 'choices_background.png';

// @ts-ignore
const StyledImage = styled(ChakraImage)<{ isLocked: boolean }>`
  max-height: 100%;
  @media (min-width: 1024px) {
    max-height: 80%;
  }

  object-fit: cover;
  opacity: ${({ isLocked }) => (isLocked ? 0.4 : 1)};
`;

export const Image = ({ src = DEFAULT_IMAGE, isLocked: isLocked }: ImageProps) => (
  <StyledImage isLocked={isLocked} src={src} borderRadius={35} />
);
