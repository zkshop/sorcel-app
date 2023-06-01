import { useToast } from '@chakra-ui/react';

const MESSAGE_DURATION = 5000;

export const useToastMessage = () => {
  const toast = useToast();

  const success = (title: string, description?: string) => {
    toast({
      title: title,
      description: description,
      status: 'success',
      duration: MESSAGE_DURATION,
      isClosable: true,
    });
  };

  const error = (title: string, description?: string) => {
    toast({
      title: title,
      description: description,
      status: 'error',
      duration: MESSAGE_DURATION,
      isClosable: true,
    });
  };

  return {
    success,
    error,
  };
};
