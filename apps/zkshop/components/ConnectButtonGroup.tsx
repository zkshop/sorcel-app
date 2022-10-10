import { Box } from '@chakra-ui/react';

import React from 'react';
import { Button } from 'ui';
import ConnectWalletButton from './ConnectWalletButton';
type ConnectButtonGroupProps = {
  handleOpenLoginModal(): void;
  handleLogout(): void;
  userLoading: boolean;
  userEmail: string | null;
  isConnectedByWallet: boolean;
};
export function ConnectButtonGroup({
  handleOpenLoginModal,
  handleLogout,
  userEmail,
  userLoading,
  isConnectedByWallet,
}: ConnectButtonGroupProps) {
  if (isConnectedByWallet) return <ConnectWalletButton />;

  if (userEmail)
    return (
      <Box display="flex" alignItems="center" flexDirection="row" gap={1}>
        <Button isActive={false}>{userEmail}</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
    );

  return (
    <Box display="flex" alignItems="center" flexDirection="row" gap={1}>
      <ConnectWalletButton />
      <Button isLoading={userLoading} onClick={handleOpenLoginModal}>
        Log In with an email
      </Button>
    </Box>
  );
}
