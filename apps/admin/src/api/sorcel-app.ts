import { Base } from './base';
import type { AxiosInstance } from 'axios';

export class sorcelApp extends Base {
  constructor(baseUrl: string, instance: AxiosInstance) {
    super(baseUrl, instance);
  }

  async create(email: string) {
    return await this.instance.post('/create', { email });
  }
}
