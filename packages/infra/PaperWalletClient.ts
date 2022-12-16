import type { TokenClient } from 'domains';
import axios from 'axios';

export function PaperWalletClient(): TokenClient {
  return {
    getToken: async (code) => {
      const res = await axios({
        method: 'POST',
        url: 'https://paper.xyz/api/v1/oauth/token',

        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.SECRET_PAPER}`,
        },

        data: {
          code,
          clientId: process.env.PAPER_CLIENT_ID,
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
          Authorization: `Bearer ${process.env.SECRET_PAPER}`,
        },

        data: {
          userToken,
          clientId: process.env.PAPER_CLIENT_ID,
        },
      });

      return res.data;
    },
  };
}
