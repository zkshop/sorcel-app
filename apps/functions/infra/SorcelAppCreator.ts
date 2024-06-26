import type { AppCreator } from '@3shop/domains';
import { createApp } from '../utils/createApp';
import { createAdmin } from '../utils/createAdmin';
import { createExampleProducts } from '../utils/createExampleProducts';

export function SorcelAppCreator(): AppCreator {
  return {
    createApp: async (name: string) => {
      const response = await createApp(name);

      return response || null;
    },
    createExampleProducts: async (appId: string) => {
      const response = await createExampleProducts(
        appId,
        'https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/products/examples/bored_ape.png?t=2024-02-20T14%3A32%3A25.997Z',
        'https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/products/examples/somaverse.png?t=2024-02-20T16%3A03%3A11.986Z',
      );

      return response ? true : false;
    },

    createAdmin: async (email: string, appId: string) => {
      const response = await createAdmin(email, appId);

      return response || null;
    },
  };
}
