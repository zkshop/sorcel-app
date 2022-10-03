import { first } from './first/first';
import { vanilla } from './vanilla/vanilla';

export type Theme = 'vanilla' | 'first';

export const themes: { [k in Theme]: any } = {
  vanilla,
  first,
};
