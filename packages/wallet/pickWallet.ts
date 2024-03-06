import { useAccount as useXamanAccount } from './XamanWalletProvider';
import { useRainbowAccount } from '../../packages/wallet';


const xaman = true;
export const useAccount = (...args: Parameters<typeof useRainbowAccount>) => {
  if (xaman)
    return useXamanAccount();
  return useRainbowAccount(...args);
}