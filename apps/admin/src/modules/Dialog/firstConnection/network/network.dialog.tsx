import React, { useState } from 'react';
import type { dialog } from '@3shop/ui/Modal/Dialogs';
import { useDialog } from '@3shop/ui/Modal/Dialogs';
import { Box, Flex, Spinner, Text } from '@3shop/ui';
import useUserSettings from '../../../../hooks/useUserSettings';
import { Network_standard } from '../../../../hooks/useUserSettings';
import EthereumLogo from './ethereum.logo';
import PolygonLogo from './polygon.logo';
import PoapLogo from './LOGO_POAP_RGB.svg';
import XrpLogo from './XRP_LEGER.svg';

const Content = () => {
  const [network, setNetwork] = useState<Network_standard | undefined>(undefined);
  const { attachSubmit, enableNext, isNextEnabled } = useDialog();
  const [get, set, loading] = useUserSettings();
  // Function to handle network selection
  const handleNetworkSelection = (networkValue: Network_standard) => {
    if (!isNextEnabled) enableNext();

    attachSubmit(() => {
      const currentSettings = get();
      if (currentSettings) set({ ...currentSettings, network: networkValue });
      else set({ network: networkValue });
    });
    setNetwork(networkValue);
  };

  if (loading)
    return (
      <Flex justify="center" align="center">
        <Spinner />
      </Flex>
    );
  return (
    <>
      <Flex direction="row" wrap="nowrap" justify="center" width="100%">
        {Object.values(Network_standard).map((networkValue) => (
          <Box
            as="button"
            key={networkValue}
            onClick={() => handleNetworkSelection(networkValue)}
            tabIndex={0} // Added to make the box focusable with tab
            width="300px" // Adjusted width to fit 3 logos
            height="300px"
            margin="10px"
            borderWidth="3px"
            borderColor={network === networkValue ? 'purple' : '#d7d7d7'}
            borderRadius="8px"
            display="flex"
            flexDirection="column" // Changed to display logos in a column
            alignItems="center"
            justifyContent="space-evenly"
            backgroundColor="white"
            color="black"
            transition="border-color 0.2s ease-in-out"
            _hover={{
              borderColor: 'purple.200',
            }}
            _active={{
              borderColor: 'purple',
            }}
            _focus={{
              borderColor: 'purple.300',
              outline: 'none',
            }}
          >
            {networkValue === Network_standard.Xrpledger ? (
              <img src={XrpLogo} height="100%" width="80%" />
            ) : (
              <>
                <EthereumLogo height="80" width="80" />
                <img src={PoapLogo} height="80" width="80" />
                <PolygonLogo height="80" width="80" />
              </>
            )}
          </Box>
        ))}
      </Flex>
      <Flex direction="column" align="center" width="100%">
        <Text textAlign="center" opacity="0.75">
          You can change this preference at any time in the integration tab.
        </Text>
      </Flex>
    </>
  );
};

export const networkDialog: dialog = {
  title: 'What blockchain standard would you like to use?',
  content: <Content />,
  notClosable: true,
  size: '3xl',
};
