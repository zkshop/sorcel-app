import { Magic } from 'magic-sdk';
import { OAuthExtension, OAuthRedirectResult } from '@magic-ext/oauth';
import { envVars } from '@3shop/config';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Text, AuthentificationFeedback, authentificationFeedbackProps } from '@3shop/ui';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { setCustomerTokenCookie } from '../useCustomerTokenCookie';
import { ROUTES_PATH } from '../routes/Routes';
import { CustomerAuthClient, useOnce } from '@3shop/admin-infra';
import { httpServerless } from '@3shop/http-serverless';
import { AuthAdminService } from '@3shop/domains';
import axios from 'axios';

const auth = AuthAdminService(CustomerAuthClient());
const redirPending = 'You will be redirected to your dashboard in a few seconds.';
const redirFailed = 'Something went wrong while attempting to authenticate you.';

const useOAuthRedirectResult = async () => {
  const magic = new Magic(envVars.PUBLIC_MAGIC_PUBLISHABLE_KEY!, {
    extensions: [new OAuthExtension()],
  });
  const result = await magic.oauth.getRedirectResult();
  return result;
};

export const Oauthredirect = () => {
  const [waitState, setWaitState] = useState<authentificationFeedbackProps['information']>({
    state: 'pending',
  });
  const navigate = useNavigate();
  const auth_method = new URLSearchParams(window.location.search).get('auth_method');
  const setDescription = (description: string) =>
    setWaitState((prev) => ({
      ...prev,
      description,
    }));

  useOnce(async () => {
    try {
      if (!auth_method) throw new Error('Failed to retrieve auth_method.');
      const { oauth } = await useOAuthRedirectResult();
      if (!oauth.userInfo.email) throw new Error('Failed to retrieve email');

      if (auth_method === 'signup') {
        setDescription("We're creating your account");
        await httpServerless.post('api/create-app', {
          email: oauth.userInfo.email,
          name: `${oauth.userInfo.email}'s app`,
        });
      }
      await auth.loginRedirect(oauth.userInfo.email);
    } catch (error) {
      setWaitState({ state: 'failed' });

      // Only for signup auth_method: user email is linked to an existing account.
      if (axios.isAxiosError(error) && error.response) {
        const { status } = error.response;

        if (status == 409)
          setDescription('An account with this email already exists. Please login.');
      }
    }
  });

  return (
    <>
      <AuthentificationFeedback information={waitState} onHomePageClick={() => navigate('/')} />
    </>
  );
};
