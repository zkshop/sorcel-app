import { Base } from '../base';
import type { app, user } from '@prisma/client';
import type { Prisma } from '@prisma/client';
import type { filter } from '../base';
import type { apiReturnValue } from '../base';

export class sorcelApp extends Base {
  constructor(baseUrl?: string) {
    if (baseUrl) super(baseUrl);
    else super(`${Base.backendBaseUrl}/sorcel-app`);
  }

  async create(email: string) {
    return await this.instance.post<app>('/create', { email });
  }

  async getApp(user: user) {
    return await this.instance.get<app>('/getApp', { params: { email: user.email } });
  }

  async getAppFilter<dataType = app>(filter: filter<Prisma.appSelect, Prisma.appInclude>) {
    return await this.instance.post<apiReturnValue<dataType>>('/get-app', { ...filter });
  }

  async updateHeirloomLock(apiKey: string, name: string, lockId: string) {
    return await this.instance.post<app>('/heirloom/lock', { apiKey, name, lockId });
  }

  async toggleHeirloom(enableHeirloom: boolean) {
    return await this.instance.post(`/heirloom/toggle/${enableHeirloom}`);
  }

  async getAll() {
    return await this.instance.get<app[]>('/getAll');
  }
}
