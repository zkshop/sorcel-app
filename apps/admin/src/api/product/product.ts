import { Base } from '../base';
import type { z } from 'zod';
import type { CreateSchema } from './schemas/create';
import type { product as productType } from '@prisma/client';
import { UpdateSchema } from './schemas/update';

export class product extends Base {
  constructor(baseUrl?: string) {
    if (baseUrl) super(baseUrl);
    else super(`${Base.backendBaseUrl}/product`);
  }

  async create(data: z.infer<typeof CreateSchema>) {
    return await this.instance.post<Partial<productType>>('/create', data);
  }

  async update(id: string, data: z.infer<typeof UpdateSchema>) {
    return await this.instance.post<product>(`/update/${id}`, data);
  }
}
