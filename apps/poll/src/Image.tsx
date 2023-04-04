import { styled } from '@3shop/ui';
import { Image as ChakraImage } from '@chakra-ui/react';

type ImageProps = {
  src: string;
  locked: boolean;
};

const StyledImage = styled(ChakraImage)<{ locked: boolean }>`
  max-height: 100%;
  @media (min-width: 1024px) {
    max-height: 80%;
  }

  object-fit: cover;
  ${({ locked }) => locked && 'opacity: 0.4;'}
`;

export const Image = ({ src = 'choices_background.png', locked }: ImageProps) => (
  <StyledImage locked={locked} src={src} borderRadius={35} />
);
