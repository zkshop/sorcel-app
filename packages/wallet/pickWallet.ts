import { useAccount as useXamanAccount } from './internal/xaman/XamanWalletProvider';
import { useRainbowAccount } from '../../packages/wallet';
import { Network_Enum } from '../apollo';
import { envVars } from '@3shop/config';

const xaman = envVars['NETWORK'] === Network_Enum.Xrpledger;
export const useAccount = (...args: Parameters<typeof useRainbowAccount>) => {
  console.log('xaman: ', xaman);
  if (xaman)
  { 
    console.log('useXamanAccount: ', useXamanAccount());
    return useXamanAccount();
  }
  return useRainbowAccount(...args);
}