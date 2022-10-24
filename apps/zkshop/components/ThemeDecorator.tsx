import { ThemeProvider } from 'ui';

type ThemeDecorator = {
  children: React.ReactNode;
};

export const ThemeDecorator = ({ children }: ThemeDecorator) => (
  <ThemeProvider>{children}</ThemeProvider>
);
