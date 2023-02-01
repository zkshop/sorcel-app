import { joinClassNames } from '@3shop/pure';
import type { HeadingProps as ChakraHeadingProps } from '@chakra-ui/react';
import { Heading as ChakraHeading } from '@chakra-ui/react';

type HeadingProps = ChakraHeadingProps;

export const Heading = ({ children, className = '', ...props }: HeadingProps) => (
  <ChakraHeading className={joinClassNames(['shop3-text', className])} {...props}>
    {children}
  </ChakraHeading>
);
