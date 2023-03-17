import { joinClassNames } from '@3shop/pure';
import type { TextProps as ChakraTextProps } from '@chakra-ui/react';
import { Text as ChakraText } from '@chakra-ui/react';

type TextProps = ChakraTextProps;

export const Text = ({ children, className = '', ...props }: TextProps) => (
  // @ts-ignore
  <ChakraText className={joinClassNames(['shop3-text', className])} {...props}>
    {children}
  </ChakraText>
);
