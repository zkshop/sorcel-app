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
  },
  contractAddress: {
    label: 'NFT Contract Address',
    name: 'contractAddress',
  },
  poapId: {
    label: 'Poap Id',
    name: 'poapId',
  },
} as const;
