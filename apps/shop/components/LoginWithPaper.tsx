import { LoginWithPaper as OriginalLoginWithPaper } from '@3shop/paper';
import { useAppDispatch } from '@3shop/store';
import { loginWithPaper } from '@3shop/store/slices/auth';

export function LoginWithPaper() {
  const dispatch = useAppDispatch();

  const onSuccessLogin = async (code: string) => {
    await dispatch(loginWithPaper(code));
  };

  return <OriginalLoginWithPaper onSuccess={onSuccessLogin} />;
}
