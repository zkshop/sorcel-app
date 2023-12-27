import React from 'react';
import { classnames } from '@3shop/config';
import { Box, Flex, Button, Input, Divider } from '@3shop/ui';
import { ConnectWalletButton } from '@3shop/wallet';
import { platforms } from '@3shop/domains/nft/NftPlatform';
import { mocks } from '@3shop/domains/nft/mocks';
import { testPlatformClient } from '@3shop/domains';
import { testPlatformService } from '@3shop/domains';
import { useAppSelector, useAppDispatch } from '@3shop/store';
import { fetchPlatformNFTS } from '@3shop/store/slices/nfts';

// import { fetchNFTS } from '@3shop/store/slices/nfts';
const { useState } = React;

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

  const TestPlatform = () => {
    const [testWallet, setTestWallet] = useState('');
    const [testing, setTesting] = useState(false);
    const dispatch = useAppDispatch();

    const CreateMock = () => {
      return (
        <>
          {mocks.map((mock, index) => (
            <div key={index}>
              <Flex flexDirection="row" justifyContent="space-between">
                <h3>{mock.name}</h3>
                <Button
                  onClick={() => {
                    console.log("!!@@data",  mock.data);
                    dispatch(fetchPlatformNFTS({ platform: mock.name, walletAddress: testWallet, identifiers: mock.data}));
                  }}
                >
                  Test
                </Button>
              </Flex>
              {Object.entries(mock.data).map(([key, value], i) => (
                <div key={i}>
                  <label>{key}</label>
                  <Input type="text" defaultValue={value as string} />
                </div>
              ))}
            </div>
          ))}
        </>
      );
    };
    return (
      <Box gap={0.5} flexDirection="column">
        <Input
          value={testWallet}
          onChange={(e) => setTestWallet(e.target.value)}
          placeholder="please enter wallet address"
        />
        <Button
          onClick={() => {
            setTesting(true);
          }}
        >
          {'Save and test'}
        </Button>
        {testing && <CreateMock />}
      </Box>
    );
  };
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
      <Flex flexDirection="column">
        <ConnectWalletButton />
        <Divider my="8" width="full" borderColor="greyscales.350" />
        {'Test platforms'}
        <TestPlatform />
      </Flex>
    </Flex>
  );
}
