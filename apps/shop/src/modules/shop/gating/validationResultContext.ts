import { gateType } from "./validator.type";
import { SorcelNft } from "@3shop/domains";
import { createContext } from "react";

export type validationResult = { gate: gateType; nft: SorcelNft };
export const ValidationResultContext = createContext<readonly validationResult[]>([]);