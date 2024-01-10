import type { UseToastOptions } from '@3shop/ui';
import { useToast } from '@3shop/ui';

export const defaultOptions: UseToastOptions = {
  duration: 5000,
  isClosable: true,
};

/**
 * useNotification is a custom hook that uses the useToast hook from @3shop/ui to display notifications.
 * It returns two functions, success and failure, which can be used to display success and error notifications respectively.
 * Both functions accept an options object which can be used to customize the notification.
 * The options object should omit the 'duration' and 'isClosable' properties as they are set by default.
 * @param {object} options - The options object for customizing the notification.
 * @returns {function[]} - An array containing the success and failure functions.
 *
 * @example
 * // Usage
 * const [success, failure] = useNotification();
 * // To display a success notification
 * success({ description: 'Operation successful' });
 * // To display an error notification
 * failure({ description: 'An error occurred' });
 */
export const useNotification = (options = defaultOptions) => {
  const toast = useToast();

  const failure = (failureOptions: Omit<UseToastOptions, 'duration' | 'isClosable'>) => {
    const applyOptions: typeof failureOptions = {
      ...options,
      ...failureOptions,
      title: failureOptions.title || 'Error',
      status: 'error',
    };
    return toast(applyOptions);
  };

  const success = (sucessOptions: Omit<UseToastOptions, 'duration' | 'isClosable'>) => {
    const applyOptions: typeof sucessOptions = {
      ...options,
      ...sucessOptions,
      title: sucessOptions.title || 'Success',
      status: 'success',
    };
    return toast(applyOptions);
  };

  return [success, failure];
};
