import React from 'react';
import { classnames } from '@3shop/config';
import { Box, Flex, Button } from '@3shop/ui';
import { ConnectWalletButton } from '@3shop/wallet';

type ConnectButtonGroupProps = {
  handleOpenLoginModal(): void;
  handleLogout(): void;
  userLoading: boolean;
  userEmail: string | null;
  isConnectedByWallet: boolean;
  showConnectEmail?: boolean;
};

const truncate = (input: string) => (input.length > 5 ? `${input.substring(0, 10)}...` : input);

export function ConnectButtonGroup({
  handleOpenLoginModal,
  handleLogout,
  userEmail,
  userLoading,
  isConnectedByWallet,
  showConnectEmail,
}: ConnectButtonGroupProps) {
  if (isConnectedByWallet) return <ConnectWalletButton />;

  if (userEmail)
    return (
      <Box
        gap={1}
        className={classnames.GROUP_CONNECT_BUTTON}
        display="flex"
        justifyContent={{ sm: 'center' }}
        flexDirection="row"
      >
        <Button
          isActive={false}
          fontSize="16px"
          fontWeight="700"
          sx={{
            maxWidth: '150px',
            minWidth: '150px',
          }}
        >
          {truncate(userEmail)}
        </Button>

        <Button
          onClick={handleLogout}
          fontSize="16px"
          fontWeight="700"
          sx={{
            maxWidth: '100px',
            minWidth: '100px',
          }}
        >
          Logout
        </Button>
      </Box>
    );

  return (
    <Flex gap={1} flexDirection="row" className={classnames.GROUP_CONNECT_BUTTON}>
      {showConnectEmail && (
        <Button
          className={classnames.EMAIL_LOGIN_BUTTON}
          isLoading={userLoading}
          onClick={handleOpenLoginModal}
          fontSize="16px"
          fontWeight="700"
        >
          E-mail login
        </Button>
      )}
      <ConnectWalletButton />
    </Flex>
  );
}
