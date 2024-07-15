import { Base } from '../base';

export class user extends Base {
  constructor(baseUrl?: string) {
    if (baseUrl) super(baseUrl);
    else super(`${Base.backendBaseUrl}/user`);
  }

  async exist(email: string) {
    return await this.instance.get<{
      exists: true;
    }>(`/exist/${email}`);
  }
}
