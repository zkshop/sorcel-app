import { alchemy } from "clients/alchemy";

export async function getEveryNftOfWallet(walletAddress: string) {
  try {
    const result = await alchemy.nft.getNftsForOwner(walletAddress);
    return result.ownedNfts;
  } catch (e) {
    console.error(e);
  }

  return [];
}
