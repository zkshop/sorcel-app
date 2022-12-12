import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

const createMagicClient = (key: string) =>
  typeof window != 'undefined' &&
  new Magic(key, {
    // @ts-ignore
    extensions: [new OAuthExtension()],
  });

export const magicClient = createMagicClient(process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY || '');
