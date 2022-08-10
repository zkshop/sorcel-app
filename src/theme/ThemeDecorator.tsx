import { ChakraProvider, theme } from "@chakra-ui/react";

import { themes } from ".";
import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";
import { useAppSelector } from "../store/store";

function ThemeDecorator({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.theme);
  const {} = useUpdateThemeOnConnection();

  return <ChakraProvider theme={themes[theme]}>{children}</ChakraProvider>;
}

export default ThemeDecorator;
