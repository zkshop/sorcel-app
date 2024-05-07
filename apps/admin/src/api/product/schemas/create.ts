import { z } from 'zod';

export const CreateSchema = z.object({
  image: z.string(),
  name: z.string(),
  isModal: z.boolean(),
  price: z.number(),
  description: z.string(),
});
