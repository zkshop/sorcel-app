import type { gateType } from './validator.type';
import type { SorcelNft } from '@3shop/domains';
import { createContext, useContext } from 'react';

export type validationResult = { gate: gateType; nft: SorcelNft };
export const ValidationResultContext = createContext<readonly validationResult[]>([]);
export const useValidationResult = () => useContext(ValidationResultContext);
