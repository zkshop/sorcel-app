import { Box } from '@3shop/ui';
import type { App } from '@3shop/apollo';

import { GeneralForm } from './GeneralForm';

type GeneralProps = {
  app: App;
};

export const General = ({ app }: GeneralProps) => (
  <Box>
    <GeneralForm app={app} />
  </Box>
);
