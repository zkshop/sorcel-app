import { XRPidentifers, EVMidentifiers } from './NftPlatform';

export type PlatformData = XRPidentifers | EVMidentifiers;

export interface mockPlatform {
  name: string;
  data: PlatformData; // Use the defined type here
}

export const mockXRPidentifiers: XRPidentifers = {
  issuer: 'rKRTexivD9UFsjH1dgmHLZHgnqhLEa9G5v',
  nftokenTaxon: '451729658',
};

export const mockEVMidentifiers: EVMidentifiers = {
  contract: 'mockContract',
};

export const mocks: mockPlatform[] = [
  {
    name: 'XRP',
    data: mockXRPidentifiers,
  },
  {
    name: 'EVM',
    data: mockEVMidentifiers, // Use EVM identifiers here
  },
];
