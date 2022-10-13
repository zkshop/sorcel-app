import useUpdateThemeOnConnection from '../hooks/useUpdateThemeOnConnection';
import { useAppSelector } from '../store/store';

import { ThemeProvider } from 'ui';

type ThemeDecorator = {
  children: React.ReactNode;
};

export const ThemeDecorator = ({ children }: ThemeDecorator) => {
  const themeToApply = useAppSelector((state) => state.theme);
  const {} = useUpdateThemeOnConnection();

  return <ThemeProvider themeToApply={themeToApply}>{children}</ThemeProvider>;
};
