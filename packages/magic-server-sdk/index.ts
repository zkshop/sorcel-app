import { envVars } from '@3shop/config';
import { Magic as AuthMagic } from '@magic-sdk/admin';

export const magicSDK = new AuthMagic(envVars.SECRET_MAGIC || '');
