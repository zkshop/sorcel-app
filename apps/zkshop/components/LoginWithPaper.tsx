import axios from 'axios';
import { LoginWithPaper as OriginalLoginWithPaper } from 'paper';
import { loginWithPaper } from 'store/slices/auth';
import { useAppDispatch } from 'store/store';

export function LoginWithPaper() {
  const dispatch = useAppDispatch();

  const onSuccessLogin = async (code: string) => {
    await dispatch(loginWithPaper(code));
  };

  return <OriginalLoginWithPaper onSuccess={onSuccessLogin} />;
}
