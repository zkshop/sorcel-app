import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NFT, NftService, SorcelNft } from '@3shop/domains';
import { NftReaderClient, objectResolver } from '@3shop/infra';
import { XRPNftReaderClient } from '@3shop/infra';
import { PlatformData } from '@3shop/domains/nft/mocks';
import { XRPidentifers, allNames } from '@3shop/domains/nft/NftPlatform';
import type { GetGates_V2_ByAppIdQuery } from '../../../packages/apollo';
import { resolver as EVMResolver } from '@3shop/infra/EVM/resolver';
import { resolver as XRPResolver } from '@3shop/infra/XRP/resolver';
import { convertManyObjects } from '@3shop/infra';
import { BithmompNft } from '@3shop/domains/nft/Xrp/Bithomp.types';

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

const resolvers = new Map<allNames, objectResolver<SorcelNft>>([['EVM', EVMResolver], ['XRP', XRPResolver]]);

// type paramsType = Omit<Params, 'contractAdressesToFilter'> & {
//   platformName: allNames;
//   identifiers: PlatformData;
// };

export const fetchNFTS = createAsyncThunk('nfts/fetch', async (params: Params) => {
  if (!params.gates) return undefined;
  const chain = params.gates[0].chain;
  switch (chain) {
    case 'EVM': {
      const response = await WalletScrapper.getWalletNfts(
        params.walletAddress,
        params.contractAdressesToFilter,
      );
      return convertManyObjects<NFT, SorcelNft>(response, resolvers.get(chain)!);
    } case 'XRP': {
      const queryParams: XRPidentifers = JSON.parse(params.contractAdressesToFilter[0]);
      const response = await XRPNftReaderClient().getWalletNfts(params.walletAddress, queryParams);
      const converted = convertManyObjects<BithmompNft, SorcelNft>(response, resolvers.get(chain)!);
      return converted;
    }
    default:
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
      return action.payload;
    });
  },
});

export const { reset } = balancesSlice.actions;

export default balancesSlice.reducer;
