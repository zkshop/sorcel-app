import type { AuthAdminData } from '@3shop/domains';
import { httpServerless } from '@3shop/http-serverless';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../routes/Routes';
import { setCustomerTokenCookie } from '../useCustomerTokenCookie';
import type { authentificationFeedbackProps } from '@3shop/ui';
import { AuthentificationFeedback } from '@3shop/ui';
import { useState } from 'react';
import { AuthAdminService } from '@3shop/domains';
import { CustomerAuthClient } from '@3shop/admin-infra';

const auth = AuthAdminService(CustomerAuthClient());

export const Redirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [waitState, setWaitState] = useState<authentificationFeedbackProps['information']>({
    state: 'pending',
  });

  const queryParams = new URLSearchParams(location.search);
  const magic_credential = queryParams.get('magic_credential');

  (async () => {
    try {
      const didToken = await auth.loginWithCredential(magic_credential!);
      const res = await httpServerless<AuthAdminData>({
        url: 'api/admin/auth/login',
        method: 'POST',
        data: {
          didToken: `Bearer ${didToken}`,
        },
      });

      if (res.data.token) {
        setCustomerTokenCookie(res.data.token);

        navigate(ROUTES_PATH.PROTECTED.INTEGRATIONS);
      } else setWaitState({ state: 'failed' });
    } catch (e) {
      console.error(e);
      setWaitState({ state: 'failed' });
    }
  })();

  return <AuthentificationFeedback information={waitState} onHomePageClick={() => navigate('/')} />;
};
