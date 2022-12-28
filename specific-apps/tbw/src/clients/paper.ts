import { envVars } from '@3shop/config';
import axios from 'axios';

export type PaperWallet = {
  walletAddress: string;
  email: string;
};

export type TokenClient = {
  getToken(code: string): Promise<string>;
  getWalletAddress(userToken: string): Promise<PaperWallet>;
};

export function PaperWalletClient(): TokenClient {
  return {
    getToken: async (code) => {
      const res = await axios({
        method: 'POST',
        url: 'https://paper.xyz/api/v1/oauth/token',

        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${envVars.SECRET_PAPER}`,
        },

        data: {
          code,
          clientId: envVars.PAPER_CLIENT_ID,
        },
      });

      if (res.status !== 200) {
        throw new Error('Error getting user token');
      }

      return res.data.userToken;
    },

    getWalletAddress: async (userToken) => {
      const res = await axios({
        method: 'POST',
        url: 'https://paper.xyz/api/v1/oauth/user-details',

        headers: {
          Authorization: `Bearer ${envVars.SECRET_PAPER}`,
        },

        data: {
          userToken,
          clientId: envVars.PAPER_CLIENT_ID,
        },
      });

      return res.data;
    },
  };
}
