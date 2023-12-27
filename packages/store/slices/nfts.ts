import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { NFT } from '@3shop/domains';
import { NftService } from '@3shop/domains';
import { testPlatformService } from '@3shop/domains';
import { testPlatformClient } from '@3shop/domains';
import { NftReaderClient } from '@3shop/infra';
import { XRPNftReaderClient } from '@3shop/infra';
import { platformFunctionType, platforms } from 'node_modules/@3shop/domains/nft/NftPlatform';
import { PlatformData } from 'node_modules/@3shop/domains/nft/mocks';

namespace testPlatformScrapper {
  // const WalletScrapper = testPlatformService
}
const WalletScrapper = NftService(NftReaderClient());

type Params = {
  walletAddress: string;
  contractAdressesToFilter: string[];
};

const nftPlatforms = new Map<string, any>([
  ['EVM', NftReaderClient],
  ['XRP', XRPNftReaderClient],
]);

export const fetchPlatformNFTS = createAsyncThunk(
  'platform/nfts/fetch',
  async (
    params: Omit<Params, 'contractAdressesToFilter'> & { platform: string; identifiers: PlatformData},
  ) => {
    const platform = nftPlatforms.get(params.platform);
    if (platform) {
      switch (params.platform) {
        case 'XRP':
          console.log('!here');
          const client = platform() as testPlatformClient.NftClient<platforms.XRP>;
          client.getWalletNfts(params.walletAddress, params.identifiers as platformFunctionType<platforms.XRP>['identifiers']).then(res => {
            console.log("res here", res);
          });
          // testPlatformService.NftService(platform as testPlatformClient.NftClient<platforms.XRP>).getWalletNfts(params.walletAddress, params.identifiers).then(res => {
          //   console.log("! res", res);
          // });
          break;
        default:
          console.log(`Unknown platform ${params.platform}`);
          return;
      }
      console.log('ok !', platform);
    }
    // await WalletScrapper.getWalletNfts(params.walletAddress, params.contractAdressesToFilter),
  },
);

export const fetchNFTS = createAsyncThunk(
  'nfts/fetch',
  async (params: Params) =>
    await WalletScrapper.getWalletNfts(params.walletAddress, params.contractAdressesToFilter),
);

const initialState: NFT[] = [];

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
