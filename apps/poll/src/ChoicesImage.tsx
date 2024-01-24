import { styled } from '@3shop/ui';
import { Image as ChakraImage } from '@chakra-ui/react';

type ImageProps = {
  src?: string;
  isLocked: boolean;
};

const DEFAULT_IMAGE = 'choices_background.png';

//@ts-ignore
const StyledImage = styled(ChakraImage)<{ isLocked: boolean }>`
  height: 100%;
  margin: auto;
  @media (max-width: 1440px) {
    height: 500px;
  }

  @media (max-width: 1024px) {
    max-height: 400px;
  }

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 425px) {
    max-height: 200px;
  }

  object-fit: cover;
  opacity: ${({ isLocked }) => (isLocked ? 0.25 : 1)};
`;

export const ChoicesImage = ({ src = DEFAULT_IMAGE, isLocked: isLocked }: ImageProps) => (
  <StyledImage isLocked={isLocked} src={src} borderRadius={35} />
);
