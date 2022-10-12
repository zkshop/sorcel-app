import { Box } from '@chakra-ui/react';

import { GeneralForm } from './GeneralForm';

type GeneralProps = {
  app: { name: string; imgUrl: string };
};

export const General = ({ app }: GeneralProps) => (
  <Box>
    <GeneralForm defaultValues={app} />
  </Box>
);
