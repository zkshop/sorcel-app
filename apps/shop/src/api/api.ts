import { Base } from './base';

export class api extends Base {
  constructor(extendBaseUrl?: string, baseUrl?: string) {
    if (baseUrl) super(baseUrl);
    else {
      if (extendBaseUrl) {
        const url = `${Base.backendBaseUrl}/api` + `/${extendBaseUrl.charAt(0) == '/' ? extendBaseUrl.slice(1) : extendBaseUrl}`;
        super(url);
      }
      else
        super(`${Base.backendBaseUrl}/api`);
    }
  }
}