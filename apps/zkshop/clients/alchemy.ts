import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: "demo",
  network: Network.MATIC_MAINNET,
};

export const alchemy = new Alchemy(settings);
