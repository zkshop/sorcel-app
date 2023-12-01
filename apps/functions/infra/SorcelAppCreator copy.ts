// import type { AppCreator } from '@3shop/domains';
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

export function SorcelAppCreator(): {
  createApp: (name: string) => Promise<any>,
  createAdmin: (email: string, appId: string) => Promise<any>
}{
  return {
    createApp: async (name: string) => {
      // Mocked response for createApp
      return {
        id: 'mocked-app-id',
        name: name,
        createdAt: new Date().toISOString(),
      };
    },
    createAdmin: async (email: string, appId: string) => {
      // Mocked response for createAdmin
      return {
        id: 'mocked-admin-id',
        email: email,
        appId: appId,
        createdAt: new Date().toISOString(),
      };
    },
  };
}
