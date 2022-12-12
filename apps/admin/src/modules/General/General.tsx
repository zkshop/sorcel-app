import { Box } from 'ui';
import type { App } from 'apollo';

import { GeneralForm } from './GeneralForm';

type GeneralProps = {
  app: App;
};

export const General = ({ app }: GeneralProps) => (
  <Box>
    <GeneralForm defaultValues={{ imgUrl: app.imgUrl || '', name: app.name || '' }} />
  </Box>
);
