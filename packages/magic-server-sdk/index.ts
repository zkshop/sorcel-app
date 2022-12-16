import { Magic as AuthMagic } from '@magic-sdk/admin';

export const magicSDK = new AuthMagic(process.env.SECRET_MAGIC || '');
