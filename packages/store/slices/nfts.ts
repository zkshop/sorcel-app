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
import type { GetGates_V2_ByAppIdQuery } from 'node_modules/@3shop/apollo';
import type { Gate_V2 } from 'node_modules/@3shop/apollo';
namespace testPlatformScrapper {
  // const WalletScrapper = testPlatformService
}
const WalletScrapper = NftService(NftReaderClient());

type Params = {
  walletAddress: string;
  contractAdressesToFilter: string[];
  gate: GetGates_V2_ByAppIdQuery['gates'][0] | undefined;
};

const nftPlatforms = new Map<allNames, any>([
  ['EVM', NftReaderClient],
  ['XRP', XRPNftReaderClient],
]);

type paramsType = Omit<Params, 'contractAdressesToFilter'> & {
  platformName: allNames;
  identifiers: PlatformData;
};

// const handleClientTwo = async <T>(
//   platform: any,
//   name: allNames,
//   callback: <T>(client: testPlatformClient.NftClient<T>) => Promise<any>,
// ): Promise<ReturnType<typeof callback>> => {
//   switch (name) {
//     case 'XRP':
//       return callback(platform() as testPlatformClient.NftClient<platforms.XRP>);
//     case 'EVM':
//       return callback(platform() as testPlatformClient.NftClient<platforms.EVM>);
//     default:
//       throw new Error(`Client ${name} doesn't exist`);
//   }
// };

// export const fetchPlatformNFTS = createAsyncThunk(
//   'platform/nfts/fetch',
//   async (params: paramsType) => {
//     const platform = nftPlatforms.get(params.platformName);
//     if (platform) {
//       const result = await handleClientTwo(platform, params.platformName, async (client) => {
//         const WalletScrapper = testPlatformService.NftService(client);
//         return await WalletScrapper.getWalletNfts(params.walletAddress, params.identifiers);
//       });
//       // console.log("!result", result);
//     } else throw new Error(`Client ${params.platformName} doesn't exist`);
//   },
// );

export const fetchNFTS = createAsyncThunk('nfts/fetch', async (params: Params) => {
  console.log("!!!params", params);
  switch(params.gate) {
    case 'EVM':
      return await WalletScrapper.getWalletNfts(params.walletAddress, params.contractAdressesToFilter);
  }
});

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
