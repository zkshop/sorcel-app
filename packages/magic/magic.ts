import { Magic } from 'magic-sdk';

import { envVars } from '@3shop/config';

const createMagicClient = (key: string) => typeof window != 'undefined' && new Magic(key);

export const magicClient = createMagicClient(envVars.PUBLIC_MAGIC_PUBLISHABLE_KEY || '');
