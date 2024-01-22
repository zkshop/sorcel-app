import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Nft } from '@3shop/domains';
import { NftService, SorcelNft } from '@3shop/domains';
import { testPlatformService } from '@3shop/domains';
import { testPlatformClient } from '@3shop/domains';
import { NftReaderClient, convertObject, objectResolver } from '@3shop/infra';
import { XRPNftReaderClient } from '@3shop/infra';
import { platformFunctionType, platforms } from 'node_modules/@3shop/domains/nft/NftPlatform';
import { PlatformData } from 'node_modules/@3shop/domains/nft/mocks';
import { allNames } from '@3shop/domains/nft/NftPlatform';
import type { GetGates_V2_ByAppIdQuery } from 'node_modules/@3shop/apollo';
import type { Gate_V2 } from 'node_modules/@3shop/apollo';
import type { Maybe } from 'node_modules/@3shop/apollo';
import { resolver as EVMResolver } from '@3shop/infra/EVM/resolver';
import { convertManyObjects } from '@3shop/infra';

type MaybeUndefined<T> = T | undefined;

namespace testPlatformScrapper {
  // const WalletScrapper = testPlatformService
}
const WalletScrapper = NftService(NftReaderClient());

type Params = {
  walletAddress: string;
  contractAdressesToFilter: string[];
  gates: GetGates_V2_ByAppIdQuery['gates'] | undefined;
};

const nftPlatforms = new Map<allNames, any>([
  ['EVM', NftReaderClient],
  ['XRP', XRPNftReaderClient],
]);

const resolvers = new Map<allNames, objectResolver<SorcelNft>>([['EVM', EVMResolver]]);

type paramsType = Omit<Params, 'contractAdressesToFilter'> & {
  platformName: allNames;
  identifiers: PlatformData;
};

// const converted = convertObject<Nft, SorcelNft>(
//   result[0],
//   resolvers.get(chain)!
// );

// console.log('!result', result);
// console.log('converted !++!!+!+', converted);
export const fetchNFTS = createAsyncThunk('nfts/fetch', async (params: Params) => {
  // console.log('!!!params', params);
  if (!params.gates) return undefined;
  const chain = params.gates[0].chain;
  switch (chain) {
    case 'EVM': {
      const response = await WalletScrapper.getWalletNfts(
        params.walletAddress,
        params.contractAdressesToFilter,
      );
      const converted = convertManyObjects<Nft, SorcelNft>(response, resolvers.get(chain)!);
      console.log('###### CONVERTED', converted);
      return converted;
    }
    default:
      // console.log('!!!default+++++++++++');
      return undefined;
  }
});

const initialState: SorcelNft[] = [];

export const balancesSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    reset: () => [],
  },
  extraReducers(builder) {
    builder.addCase(fetchNFTS.fulfilled, (state, action) => {
      console.log("!!!action.payload", action.payload);
      return action.payload;
    });
  },
});

export const { reset } = balancesSlice.actions;

export default balancesSlice.reducer;
