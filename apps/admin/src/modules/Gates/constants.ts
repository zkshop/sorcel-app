export const GATE_FIELDS = {
  name: {
    label: 'Name',
    name: 'name',
  },
  discount: {
    label: 'Discount',
    name: 'discount',
  },
  perk: {
    name: 'perk',
    uniqueClaim: {
      label: 'Can be claimed only once',
      value: 'uniqueClaim',
    },
    exclusiveAccess: {
      label: 'Exclusive Access',
      value: 'exclusiveAccess',
    },
    discount: {
      label: 'Discount',
      value: 'discount',
    },
  },
} as const;

export const COLLECTION_FIELDS = {
  type: {
    name: 'type',
    label: 'Type of collection',
    poap: {
      label: 'POAP',
      value: 'POAP',
    },
    nft: {
      label: 'NFT',
      value: 'NFT',
    },
    Erc20: {
      label: 'ERC-20',
      value: 'ERC20',
    },
  },
  network: {
    name: 'network',
    label: 'Network',
    chiliz: {
      label: 'Chiliz',
      value: 'CHILIZ',
    },
    polygon: {
      label: 'Polygon',
      value: 'POLYGON',
    },
    ethereum: {
      label: 'Ethereum',
      value: 'ETHEREUM',
    },
    xrpledger: {
      label: 'XRP Ledger',
      value: 'XRPLEDGER',
    },
  },
  chiliz: {
    contractAddress: {
      label: 'NFT Contract Address',
      name: 'contractAddress',
    },
  },
  ethereum: {
    contractAddress: {
      label: 'NFT Contract Address',
      name: 'contractAddress',
    },
  },
  polygon: {
    contractAddress: {
      label: 'NFT Contract Address',
      name: 'contractAddress',
    },
  },
  xrpledger: {
    issuer: {
      label: 'Issuer',
      name: 'issuer',
    },
    taxon: {
      label: 'Taxon',
      name: 'taxon',
    },
  },
  poapIds: {
    label: 'Poap Ids',
    name: 'poapIds',
  },
} as const;
