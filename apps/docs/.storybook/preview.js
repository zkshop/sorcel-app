import { withRouter } from 'storybook-addon-react-router-v6';
import { Switch, theme, useColorMode } from '@3shop/ui';

export const decorators = [withRouter];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
    resetCSS: true,
  },
  decorators: [
    (Story) => {
      const [colorMode, toggleColorMode] = useColorMode()
      return (
        <Switch onChange={toggleColorMode} />
      );
    }
  ]
};
