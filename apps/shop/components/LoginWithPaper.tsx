import { LoginWithPaper as OriginalLoginWithPaper } from 'paper';
import { useAppDispatch } from 'store';
import { loginWithPaper } from 'store/slices/auth';

export function LoginWithPaper() {
  const dispatch = useAppDispatch();

  const onSuccessLogin = async (code: string) => {
    await dispatch(loginWithPaper(code));
  };

  return <OriginalLoginWithPaper onSuccess={onSuccessLogin} />;
}
