import { platforms } from "../NftPlatform";

// type NftServiceType = {
//   getWalletNfts(walletAddress: string, contractAddresses?: string[]): Promise<platforms.Xrp['nft'][]>;
//   // getNftAttribute(address: string): Promise<NftAttribute<any>[]>;
// };

// export function NftService(client: NftClient): NftServiceType {
//   return {
//     getWalletNfts: (walletAddress, contractAddresses) =>
//       client.getWalletNfts(walletAddress, contractAddresses),
//     // getNftAttribute: (smartContractAdress) => client.getNftAttribute(smartContractAdress),
//   };
// }