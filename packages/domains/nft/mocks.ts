import { XRPidentifers, EVMidentifiers, allNames } from './NftPlatform';

export type PlatformData = XRPidentifers | EVMidentifiers;

export interface mockPlatform {
  name: allNames;
  data: PlatformData;
}

export const mockXRPidentifiers: XRPidentifers = {
  issuer: 'rpbjkoncKiv1LkPWShzZksqYPzKXmUhTW7',
  nftokenTaxon: '52',
};

export const mockEVMidentifiers: EVMidentifiers = {
  contract: '0xCc4177805aad9483ea2b2b814B82a83abe564023',
};

export const mocks: mockPlatform[] = [
  {
    name: 'XRP',
    data: mockXRPidentifiers,
  },
  {
    name: 'EVM',
    data: mockEVMidentifiers,
  },
];
