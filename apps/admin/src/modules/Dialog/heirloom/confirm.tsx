import React, { useEffect } from 'react';
import type { dialog } from '@3shop/ui/Modal/Dialogs';
import { Box, Text } from '@3shop/ui';
import { useDialog } from '@3shop/ui/Modal/Dialogs';

const ConfirmContent = () => {
  const { enableNext } = useDialog();
  useEffect(() => {
    enableNext();
  }, []);
  return (
    <Box padding="20px">
      <Text variant={"H500"}>
        You have selected Heirloom as the network. Please note that gating with Heirloom works differently:
      </Text>
      <Box height="20px" />
      <ul>
        <li>You can create only one gate for the entire app.</li>
        <li>You cannot use NFTs and POAP or previously created gates.</li>
      </ul>
    </Box>
  );
};

export const confirmDialog: dialog = {
  title: 'Gating with heirloom',
  content: <ConfirmContent />,
  notClosable: true,
  size: 'xl',
  cancelable: true,
};
