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
  },
  network: {
    name: 'network',
    label: 'Network',
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
  contractAddress: {
    label: 'NFT Contract Address',
    name: 'contractAddress',
  },
  poapIds: {
    label: 'Poap Ids',
    name: 'poapIds',
  },
} as const;
