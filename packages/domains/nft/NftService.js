export function NftService(client) {
    return {
        getWalletNfts: (walletAddress) => client.getWalletNfts(walletAddress),
        getNftAttribute: (smartContractAdress) => client.getNftAttribute(smartContractAdress),
    };
}
