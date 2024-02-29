import type { Nullable } from '@3shop/types';
import type { AppCreator, AppData, UserData } from './AppCreator';

type AppCreatorServiceType = {
  createApp: (name: string) => Promise<Nullable<AppData>>;
  createExampleProducts: (appId: string) => Promise<boolean>;
  createAdmin: (email: string, appId: string) => Promise<Nullable<UserData>>;
};

export function AppCreatorService(client: AppCreator): AppCreatorServiceType {
  return {
    createApp: async (name) => {
      const response = await client.createApp(name);

      return response;
    },

    createExampleProducts: async (appId) => client.createExampleProducts(appId),

    createAdmin: async (email, appId) => client.createAdmin(email, appId),
  };
}
