import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Nft } from '@3shop/domains';
import { NftService } from '@3shop/domains';
import { testPlatformService } from '@3shop/domains';
import { testPlatformClient } from '@3shop/domains';
import { NftReaderClient } from '@3shop/infra';
import { XRPNftReaderClient } from '@3shop/infra';
import { platformFunctionType, platforms } from 'node_modules/@3shop/domains/nft/NftPlatform';
import { PlatformData } from 'node_modules/@3shop/domains/nft/mocks';
import { allNames } from '@3shop/domains/nft/NftPlatform';

namespace testPlatformScrapper {
  // const WalletScrapper = testPlatformService
}
const WalletScrapper = NftService(NftReaderClient());

type Params = {
  walletAddress: string;
  contractAdressesToFilter: string[];
};

const nftPlatforms = new Map<allNames, any>([
  ['EVM', NftReaderClient],
  ['XRP', XRPNftReaderClient],
]);

type paramsType = Omit<Params, 'contractAdressesToFilter'> & {
  platformName: allNames;
  identifiers: PlatformData;
};

const handleClient = async <T>(platform: any, params: paramsType): Promise<void> => {
  const client = platform() as testPlatformClient.NftClient<T>;
  const walletScrapper = testPlatformService.NftService<T>(client);
  await walletScrapper.getWalletNfts(params.walletAddress, params.identifiers).then((res) => {
    console.log('res', res);
  });
  // await walletScrapper.getWalletNfts(params.walletAddress, params.identifiers);
};

export const fetchPlatformNFTS = createAsyncThunk(
  'platform/nfts/fetch',
  async (params: paramsType) => {
    const platform = nftPlatforms.get(params.platformName);
    if (platform) {
      switch (params.platformName) {
        case 'XRP':
          return await handleClient<platforms.XRP>(platform, params);
        case 'EVM':
          return await handleClient<platforms.EvmBased>(platform, params);
        default:
          console.log(`Unknown platform ${params.platformName}`);
          return;
      }
    } else throw new Error(`Client ${params.platformName} doesn't exist`);
  },
);

export const fetchNFTS = createAsyncThunk(
  'nfts/fetch',
  async (params: Params) =>
    await WalletScrapper.getWalletNfts(params.walletAddress, params.contractAdressesToFilter),
);

const initialState: Nft[] = [];

export const balancesSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    reset: () => [],
  },
  extraReducers(builder) {
    builder.addCase(fetchNFTS.fulfilled, (state, action) => action.payload);
  },
});

export const { reset } = balancesSlice.actions;

export default balancesSlice.reducer;
