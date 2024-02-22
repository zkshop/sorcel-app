import { HStack, Tooltip } from '@chakra-ui/react';

import type { WithOptionalChildren } from '@3shop/types';
import { Heading } from '../Heading/Heading';
import { QuestionIcon } from '@chakra-ui/icons';

type HeaderProps = WithOptionalChildren<{ title: string; tooltip?: string }>;

export const Header = ({ title, tooltip, children }: HeaderProps) => (
  <HStack justifyContent="space-between">
    <Heading as="h2" mb={2}>
      {title}{' '}
      {tooltip && (
        <Tooltip label={tooltip}>
          <QuestionIcon boxSize={6} />
        </Tooltip>
      )}
    </Heading>
    {children}
  </HStack>
);
