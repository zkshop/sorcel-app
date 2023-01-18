import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Nft, Alchemy, OwnedNft } from '@3shop/alchemy';
import { createAlchemy } from '@3shop/alchemy';
import type { NftClient } from '@3shop/domains';
import { NftService } from '@3shop/domains';

const getAllWalletNtfs = async (
  api: Alchemy,
  address: string,
  pageKey?: string,
): Promise<OwnedNft[]> => {
  const result = await api.nft.getNftsForOwner(address, {
    pageSize: 100,
    pageKey,
  });

  const ownedNfts = result.ownedNfts;

  if (result.pageKey) return ownedNfts.concat(await getAllWalletNtfs(api, address, result.pageKey));
  return ownedNfts;
};

export function NftScrapperClient(): NftClient {
  const api = createAlchemy();

  return {
    getWalletNfts: async (address: string, pageKey?: string) =>
      await getAllWalletNtfs(api, address, pageKey),

    getNftAttribute: async () => [],
  };
}

const WalletScrapper = NftService(NftScrapperClient());

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
