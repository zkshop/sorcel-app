import { ThemeProvider } from '@3shop/ui';

type ThemeDecoratorProps = {
  children: React.ReactNode;
};

export const ThemeDecorator = ({ children }: ThemeDecoratorProps) => (
  <ThemeProvider>{children}</ThemeProvider>
);
