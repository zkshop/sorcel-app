import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NFT, NftService, SorcelNft } from '@3shop/domains';
import { NftReaderClient, objectResolver } from '@3shop/infra';
import { XRPNftReaderClient } from '@3shop/infra';
import { XRPidentifers, allNames } from '@3shop/domains/nft/NftPlatform';
import { Network_Enum, type GetGates_V2_ByAppIdQuery, Segment } from '../../../packages/apollo';
import { resolver as EVMResolver } from '@3shop/infra/EVM/resolver';
import { resolver as XRPResolver } from '@3shop/infra/XRP/resolver';
import { convertManyObjects } from '@3shop/infra';
import { BithmompNft } from '@3shop/domains/nft/Xrp/Bithomp.types';
import _ from 'lodash';

const WalletScrapper = NftService(NftReaderClient());
const NftServices = {
  ETHEREUM: NftService(NftReaderClient(Network_Enum.Ethereum)),
  POLYGON: NftService(NftReaderClient(Network_Enum.Polygon))
}

type Params = {
  walletAddress: string;
  networks: Segment['network'][];
  contractAdressesToFilter: string[];
  gates: GetGates_V2_ByAppIdQuery['gates'] | undefined;
};

// const nftPlatforms = new Map<allNames, any>([
//   ['EVM', NftReaderClient],
//   ['XRP', XRPNftReaderClient],
// ]);

const resolvers = new Map<allNames, objectResolver<SorcelNft>>([['EVM', EVMResolver], ['XRP', XRPResolver]]);

export const fetchNFTS = createAsyncThunk('nfts/fetch', async (params: Params) => {
  if (!params.gates) return undefined;
  const chain = params.gates[0].chain;
  switch (chain) {
    case 'EVM': {
      const polygonAdresses: string[] = [];
      const ethAdresses: string[] = [];

      for (let i = 0;i < params.networks.length; i++) {
        if (!params.networks[i])
          continue ;
        if (params.networks[i] == 'POLYGON')
          polygonAdresses.push(params.contractAdressesToFilter[i]);
        else
          ethAdresses.push(params.contractAdressesToFilter[i]);
      }
      
      const [ethResponse, polygonResponse] = await Promise.all([
        NftServices.ETHEREUM.getWalletNfts(params.walletAddress, ethAdresses),
        NftServices.POLYGON.getWalletNfts(params.walletAddress, polygonAdresses),
      ]);
      const response = ethResponse.concat(polygonResponse);
      console.log("!response", response);
      return convertManyObjects<NFT, SorcelNft>(response, resolvers.get(chain)!);
    } case 'XRP': {
      const queryParams: XRPidentifers[] = [...new Set(params.contractAdressesToFilter)].map(address => JSON.parse(address));
      const responses = await Promise.all(queryParams.map(queryParam => XRPNftReaderClient().getWalletNfts(params.walletAddress, queryParam)));
      const converted = convertManyObjects<BithmompNft, SorcelNft>(responses.flat(), resolvers.get(chain)!);
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
      return _.uniqBy(action.payload, 'combinedIdentifiers');
    });
  },
});

export const { reset } = balancesSlice.actions;

export default balancesSlice.reducer;
