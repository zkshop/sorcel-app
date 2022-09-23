import { extendTheme } from "@chakra-ui/react";

import { common } from '../common/common'

export const vanilla = extendTheme({
  ...common,
  colors: {
    ...common.colors,
    bannerLeft: "grey",
    bannerRight: "black",
    super: "#ff6600"
  },
});
