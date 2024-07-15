import React, { useEffect } from 'react';
import { useDialog, type dialog } from '@3shop/ui/Modal/Dialogs';
import { Box, Button, Checkbox, CopyIcon, Input, Text } from '@3shop/ui';
import { useClipboard } from '@chakra-ui/react';

const CopyCorsContent = () => {
  const { hasCopied, onCopy } = useClipboard('http://test.com');
  const dialog = useDialog();
  const [isChecked, setIsChecked] = React.useState(false);

  useEffect(() => {
    if (isChecked) {
      dialog.enableNext();
    } else {
      dialog.disableNext();
    }
  }, [isChecked, dialog]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Box padding="20px">
      <Text marginBottom="10px">
        When creating your lock, please copy the following CORS domain into the CORS field of your
        form.
      </Text>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <Input value={process.env.HEIRLOOM_CORS} isReadOnly />
        <Button onClick={onCopy} marginLeft="10px">
          {hasCopied ? 'Copied !' : <CopyIcon />}
        </Button>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <Text marginLeft="10px">I have used this CORS for my lock</Text>
      </Box>
    </Box>
  );
};

export const copyCorsDialog: dialog = {
  title: 'Create your lock',
  content: <CopyCorsContent />,
  notClosable: true,
  size: 'md',
};
