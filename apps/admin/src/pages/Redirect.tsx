import type { AuthAdminData } from '@3shop/domains';
import { httpServerless } from '@3shop/http-serverless';
import { Magic } from 'magic-sdk';
import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../routes/Routes';
import { setCustomerTokenCookie } from '../useCustomerTokenCookie';
import { HStack, Image, VStack, Text, Button } from '@3shop/ui';
import { useState } from 'react';

export const Redirect = () => {
  const magic = new Magic(process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY!);
  const navigate = useNavigate();
  const location = useLocation();

  const redirPending = 'You will be redirected to your dashboard in a few seconds.';
  const redirFailed = 'Something went wrong while attempting to authenticate you.';
  const [description, setDescription] = useState(redirPending);

  const queryParams = new URLSearchParams(location.search);
  const magic_credential = queryParams.get('magic_credential');

  (async () => {
    const didToken = await magic.auth.loginWithCredential(magic_credential!).catch((e) => {
      console.error(e);
      setDescription(redirFailed);
    });

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
    } else setDescription(redirFailed);
  })();

  const descriptionNode = (): ReactNode => {
    if (description === redirFailed) {
      return (
        <>
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            {description}
          </Text>
          <Button onClick={() => navigate('/')}>Return to homepage</Button>
        </>
      );
    }
    return (
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        {description}
      </Text>
    );
  };

  return (
    <>
      <HStack justifyContent="center" alignItems="center" height="100vh">
        <VStack spacing={10}>
          <Image
            src="https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/logo/logo.png"
            alt="Company Logo"
          />
          {descriptionNode()}
        </VStack>
      </HStack>
    </>
  );
};