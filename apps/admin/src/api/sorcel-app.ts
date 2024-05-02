import { Base } from './base';
import type { app } from '@prisma/client';

export class sorcelApp extends Base {
  constructor(baseUrl?: string) {
    if (baseUrl) super(baseUrl);
    else super(`${Base.backendBaseUrl}/sorcel-app`);
  }

  async create(email: string) {
    return await this.instance.post<app>('/create', { email });
  }
}
