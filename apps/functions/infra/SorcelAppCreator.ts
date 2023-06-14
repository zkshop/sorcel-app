import type { AppCreator } from '@3shop/domains';
import { createApp } from '../utils/createApp';
import { createAdmin } from '../utils/createadmin';

export function SorcelAppCreator(): AppCreator {
  return {
    createApp: async (name: string) => {
      const response = await createApp(name);

      return response || null;
    },
    createAdmin: async (email: string, appId: string) => {
      const response = await createAdmin(email, appId);

      return response || null;
    },
  };
}
