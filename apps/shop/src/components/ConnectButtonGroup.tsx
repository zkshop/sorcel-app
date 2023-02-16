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
};

const truncate = (input: string) => (input.length > 5 ? `${input.substring(0, 10)}...` : input);

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
      <Box
        gap={1}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Button
          isActive={false}
          fontSize="16px"
          fontWeight="700"
          borderRadius="xl"
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
          borderRadius="xl"
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
    <Flex
      gap={1}
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <ConnectWalletButton />

      <Button
        className={classnames.EMAIL_LOGIN_BUTTON}
        isLoading={userLoading}
        onClick={handleOpenLoginModal}
        fontSize="16px"
        fontWeight="700"
        borderRadius="xl"
      >
        E-mail login
      </Button>
    </Flex>
  );
}
