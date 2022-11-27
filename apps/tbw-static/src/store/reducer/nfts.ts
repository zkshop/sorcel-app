import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Nft, Network, createAlchemy } from 'alchemy';

type WalletScrapperClient = {
  getWalletNfts(address: string): Promise<Nft[]>;
};

function WalletScrapperService(client: WalletScrapperClient) {
  return {
    getWalletNfts: (address: string) => client.getWalletNfts(address),
  };
}

export function NftScrapperClient(network: Network): WalletScrapperClient {
  const api = createAlchemy(network);

  return {
    getWalletNfts: async (address) => {
      const result = await api.nft.getNftsForOwner(address);
      return result.ownedNfts;
    },
  };
}

const WalletScrapper = WalletScrapperService(NftScrapperClient(Network.MATIC_MAINNET));

export const fetchNFTS = createAsyncThunk(
  'nfts/fetch',
  async (walletAddress: string) => await WalletScrapper.getWalletNfts(walletAddress),
);

const initialState: Nft[] = [];

export const balancesSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    reset: () => [],
  },
  extraReducers(builder) {
    builder.addCase(fetchNFTS.fulfilled, (_, action) => action.payload);
  },
});

export const { reset } = balancesSlice.actions;

export default balancesSlice.reducer;
