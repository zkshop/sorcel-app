import { breakpoints } from "./foundations/breakpoints";
import { colors } from "./foundations/colors";
import { borderRadius } from "./foundations/borderRadius";
import { styles } from "./styles";

export const common = {
  ...breakpoints,
  ...borderRadius,
  ...colors,
  ...styles,
};
