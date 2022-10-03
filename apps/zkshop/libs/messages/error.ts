import { UseToastOptions } from '@chakra-ui/react';

export const ERROR_MESSAGE: UseToastOptions = {
  title: 'Error',
  description: "We couldn't execute your request. Please try again later.",
  status: 'error',
  duration: 3000,
};
