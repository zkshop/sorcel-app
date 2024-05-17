import { Base } from '../base';
import type { app, user } from '@prisma/client';

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

  async updateHeirloomLock(apiKey: string, name: string) {
    return await this.instance.post<app>('/heirloom/lock', { apiKey, name });
  }

  async toggleHeirloom(enableHeirloom: boolean) {
    return await this.instance.post(`/heirloom/toggle/${enableHeirloom}`)
  }

  async getHeirloom(app_id: string) {
    return await this.instance.get(`/heirloom/${app_id}`);
  }

  async getAll() {
    return await this.instance.get<app[]>('/getAll');
  }
}
