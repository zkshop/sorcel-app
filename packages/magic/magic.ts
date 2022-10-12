import { Magic, MagicUserMetadata } from 'magic-sdk';
import { Magic as AuthMagic } from '@magic-sdk/admin';
import { OAuthExtension } from '@magic-ext/oauth';

const createMagicClient = (key: string) =>
  typeof window != 'undefined' &&
  new Magic(key, {
    extensions: [new OAuthExtension()],
  });

export const magicClient = createMagicClient(process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY || '');
export const magicSDK = new AuthMagic(process.env.MAGIC_SECRET_KEY || '');
