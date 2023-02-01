import { joinClassNames } from '@3shop/pure';
import type { FormLabelProps as ChakraFormLabelProps } from '@chakra-ui/react';
import { FormLabel as ChakraFormLabel } from '@chakra-ui/react';

type FormLabelProps = ChakraFormLabelProps;

export const FormLabel = ({ children, className = '', ...props }: FormLabelProps) => (
  <ChakraFormLabel className={joinClassNames(['shop3-text', className])} {...props}>
    {children}
  </ChakraFormLabel>
);
