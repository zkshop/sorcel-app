import { magicClient } from './magic';

export const loginWithEmail = async (email: string) => {
  if (!magicClient) {
    return { email: null, issuer: null, phoneNumber: null, publicAddress: null };
  }

  const didToken = await magicClient.auth.loginWithMagicLink({
    email,
  });

  const res = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + didToken,
    },
  });

  if (res.status === 200) {
    const userMetadata = await magicClient.user.getMetadata();
    return userMetadata;
  }

  return { email: null, issuer: null, phoneNumber: null, publicAddress: null };
};

export const isLoggedIn = async () => {
  if (!magicClient) return { email: null, issuer: null, phoneNumber: null, publicAddress: null };
  const isUserLoggedIn = await magicClient.user.isLoggedIn();
  console.log({ isUserLoggedIn });

  if (isUserLoggedIn) return await magicClient.user.getMetadata();
  return { email: null, issuer: null, phoneNumber: null, publicAddress: null };
};

export const logout = async () => {
  if (!magicClient) return null;
  await magicClient.user.logout();
  console.log(await magicClient.user.isLoggedIn());
};
