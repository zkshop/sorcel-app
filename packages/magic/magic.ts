import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import { envVars } from '@3shop/config';

const createMagicClient = (key: string) =>
  typeof window != 'undefined' &&
  new Magic(key, {
    extensions: [new OAuthExtension()],
  });

export const magicClient = createMagicClient(envVars.PUBLIC_MAGIC_PUBLISHABLE_KEY || '');
