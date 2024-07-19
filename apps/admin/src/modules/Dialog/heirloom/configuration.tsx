import React, { useEffect } from 'react';
import { useDialog, type dialog } from '@3shop/ui/Modal/Dialogs';
import { Box, Checkbox, Text } from '@3shop/ui';

const CopyCorsContent = () => {
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
        When creating your lock at{' '}
        <a href="https://creator.heirloom.io/locks">https://creator.heirloom.io/locks</a>, please
        enter your website url into the CORS field of your form.
      </Text>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <Text marginLeft="10px">I have entered my website url as CORS for my lock</Text>
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
