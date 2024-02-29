import { Magic } from 'magic-sdk';

const createMagicClient = (key: string) => typeof window != 'undefined' && new Magic(key);

export const magicClient = createMagicClient(process.env.PUBLIC_MAGIC_PUBLISHABLE_KEY || '');
