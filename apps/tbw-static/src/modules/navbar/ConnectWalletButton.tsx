import { ConnectButton } from '@rainbow-me/rainbowkit';

const ConnectWalletButton = () => (
  <ConnectButton label="Wallet connect" chainStatus="icon" showBalance={false} />
);

export default ConnectWalletButton;
