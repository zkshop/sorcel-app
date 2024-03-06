import { testPlatformClient } from '@3shop/domains/nft/NftClient';
import { platforms } from '@3shop/domains/nft/NftPlatform';
import { BithmompNft, NftApiParams } from '@3shop/domains/nft/Xrp/Bithomp.types';
import axios from 'axios';

export function XRPNftReaderClient(): testPlatformClient.NftClient<platforms.XRP, BithmompNft[]> {
  return {
    getWalletNfts: async (walletAddress, identifiers) => {
      console.log("!wallet", walletAddress);
      const params: NftApiParams = {
        owner: walletAddress,
        list: 'nfts',
        issuer: identifiers.issuer,
        taxon: identifiers.nftokenTaxon,
      };
      const nfts = await axios
        .get(`https://bithomp.com/api/v2/nfts`, {
          params,
          headers: {
            'x-bithomp-token': '131c5def-d154-4a4c-9dea-59afc1eb0a7d',
          },
        })
        .then(({ data }) => {
          return data.nfts;
        });
        console.log(`!bithomp response for ${walletAddress}`, nfts);
        return nfts;
      // return nfts.filter(nft => {
      //   return Object.keys(identifiers).every(key => nft.hasOwnProperty(key));
      // });
    },
  };
}