import { Base } from '../base';
import type { z } from 'zod';
import type { CreateSchema } from './schemas/create';
import type { product as productType } from '@prisma/client';

export class product extends Base {
  constructor(baseUrl?: string) {
    if (baseUrl) super(baseUrl);
    else super(`${Base.backendBaseUrl}/product`);
  }

  async create(data: z.infer<typeof CreateSchema>) {
    return await this.instance.post<Partial<productType>>('/create', data);
  }
}
