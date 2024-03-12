import { testPlatformClient } from '@3shop/domains/nft/NftClient';
import { platforms } from '@3shop/domains/nft/NftPlatform';
import { BithmompNft, NftApiParams } from '@3shop/domains/nft/Xrp/Bithomp.types';
import { envVars } from '@3shop/config';
import axios from 'axios';

export function XRPNftReaderClient(): testPlatformClient.NftClient<platforms.XRP, BithmompNft[]> {
  return {
    getWalletNfts: async (walletAddress, identifiers) => {
      const params: NftApiParams = {
        owner: walletAddress,
        list: 'nfts',
        issuer: identifiers.issuer,
        taxon: identifiers.nftokenTaxon,
      };
      const nfts = await axios
        .get<{nfts: BithmompNft[]}>(`https://bithomp.com/api/v2/nfts`, {
          params,
          headers: {
            'x-bithomp-token': envVars['SECRET_BITHOMP'],
          },
        })
        .then(({ data }) => {
          return data.nfts;
        });
        return nfts;
    },
  };
}