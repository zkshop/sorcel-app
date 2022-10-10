import { RouterContext } from "next/dist/shared/lib/router-context";

const themes = require('../../zkshop/theme/index')
const theme = themes.vanilla;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}