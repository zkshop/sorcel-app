import { LoginWithPaper as OriginalLoginWithPaper } from 'paper';
import { loginWithPaper } from 'store/slices/auth';
import { useAppDispatch } from 'store/store';

type LoginWithPaperProps = {
  children: (props: any) => React.ReactNode;
};

export const LoginWithPaper = ({ children }: LoginWithPaperProps) => {
  const dispatch = useAppDispatch();

  const onSuccess = async (code: string) => {
    await dispatch(loginWithPaper(code));
  };

  return <OriginalLoginWithPaper onSuccess={onSuccess}>{children}</OriginalLoginWithPaper>;
};
