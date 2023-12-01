import type { AppCreator } from '@3shop/domains';
import { createApp } from '../utils/createApp';
import { createAdmin } from '../utils/createAdmin';

export const testUserPromise = () => {
  return new Promise((resolve, reject) => {
    // Simulate async user creation
    setTimeout(() => {
      const user = { id: 1, name: 'Test User' };
      resolve(user);
    }, 1000);
  });
}

const createAppMock = async (name: string) => {
  // Mocked response for createApp
  return {
    plan: "pro",
    id: 'mocked-app-id',
    name: name,
    createdAt: new Date().toISOString(),
  };
}

const createAdminMock = async (email: string, appId: string) => {
  // Mocked response for createAdmin
  return {
    app_id: "test",
    role: "test",
    id: 'mocked-admin-id',
    email: email,
    appId: appId,
    createdAt: new Date().toISOString(),
  };
}

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