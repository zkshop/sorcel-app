import type { Nullable } from '@3shop/types';

export interface AppData {
  id: string;
  plan: string;
  name: string;
}

export interface UserData {
  id: string;
  email: string;
  role: string;
  app_id: string;
}

export type AppCreator = {
  createApp: (name: string) => Promise<Nullable<AppData>>;
  createAdmin: (email: string, appId: string) => Promise<Nullable<UserData>>;
};
