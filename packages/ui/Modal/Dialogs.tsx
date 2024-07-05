import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  Tooltip,
  Box,
  Button,
} from '../';
import type chakra from '@chakra-ui/react';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

/**
 * Interface for dialog properties.
 * @typedef {Object} dialog
 * @property {string} title - The title of the dialog.
 * @property {React.ReactNode} content - The content of the dialog, can be any React node.
 * @property {boolean} [notClosable] - Optional flag to make the dialog not closable.
 * @property {chakra.ModalProps['size']} [size] - Optional size of the dialog, based on Chakra UI's ModalProps size.
 * @property {boolean} [cancelable] - Optional flag to show a cancel button next to the next button.
 */
export interface dialog {
  title: string;
  content: React.ReactNode;
  notClosable?: boolean;
  size?: chakra.ModalProps['size'];
  cancelable?: boolean;
}

/**
 * Type for the submit callback.
 */
export type SubmitCallback = () => boolean;

/**
 * Interface for the context value used in DialogContext.
 * @typedef {Object} DialogContextValue
 * @property {Function} next - Function to navigate to the next dialog.
 * @property {Function} disableNext - Function to disable the next button.
 * @property {Function} enableNext - Function to enable the next button.
 * @property {boolean} isNextEnabled - Flag indicating if the next button is enabled.
 * @property {Function} attachSubmit - Function to attach a submit callback.
 */
export interface DialogContextValue {
  next: (force?: boolean) => void;
  disableNext: () => void;
  enableNext: () => void;
  isNextEnabled: boolean;
  attachSubmit: (callback: SubmitCallback) => void;
}

/**
 * Context for managing dialog navigation and state.
 * @type {React.Context<DialogContextValue>}
 */
const DialogContext = createContext<DialogContextValue>({
  next: () => {},
  disableNext: () => {},
  enableNext: () => {},
  isNextEnabled: false,
  attachSubmit: (callback: SubmitCallback) => {
    callback;
  },
});

/**
 * Custom hook to use the DialogContext.
 * @returns {Object} The context value of DialogContext.
 */
export const useDialog = () => useContext(DialogContext);

/**
 * Component to manage and display a sequence of dialogs, such as surveys or forms.
 * This component can be used in various parts of the application where a series of user inputs are required.
 *
 * @param {Object} props - Component props.
 * @param {dialog[]} props.children - An array of dialog objects to be displayed.
 * @param {string} [props.lastModalNextText="Next"] - Text for the next button on the last dialog.
 * @returns {React.Component} A component that renders the dialogs.
 *
 */
export const Dialogs = ({
  children,
  lastModalNextText = 'Next',
}: {
  children: dialog[];
  lastModalNextText?: string;
}) => {
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(children.length > 0);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [submitCallbacks, setSubmitCallbacks] = useState<{ [id: number]: SubmitCallback }>({});
  const modalProps = useMemo<
    Pick<chakra.ModalProps, 'size' | 'closeOnEsc' | 'closeOnOverlayClick'>
  >(() => {
    const currentModal = children[currentDialogIndex];
    if (!currentModal) return {};
    const allowClose = currentModal.notClosable != undefined && currentModal.notClosable == false;
    return {
      size: currentModal.size,
      closeOnEsc: allowClose,
      closeOnOverlayClick: allowClose,
    };
  }, [currentDialogIndex, children]);

  useEffect(() => {
    if (!children.length) setIsOpen(false);
    else setIsOpen(true);
  }, [children]);
  /**
   * Function to navigate to the next dialog or close the modal if it's the last dialog.
   * @param {boolean} [force=false] - If true, navigate to the next dialog without calling the callback.
   */
  const next = (force = false) => {
    if (force) {
      if (currentDialogIndex < children.length - 1) {
        setCurrentDialogIndex(currentDialogIndex + 1);
      } else {
        setIsOpen(false);
      }
      return;
    }

    const callback = submitCallbacks[currentDialogIndex];
    const callbackResult = (() => {
      if (!callback) return true;
      return callback();
    })();

    if (callbackResult) {
      if (currentDialogIndex < children.length - 1) {
        setCurrentDialogIndex(currentDialogIndex + 1);
      } else {
        setIsOpen(false);
      }
    }
  };

  /**
   * Function to disable the next button.
   */
  const disableNext = () => setIsNextDisabled(true);

  /**
   * Function to enable the next button.
   */
  const enableNext = () => setIsNextDisabled(false);

  /**
   * Function to attach a submit callback to the current dialog.
   * @param {SubmitCallback} callback - The callback function to be executed.
   */
  const attachSubmit = (callback: SubmitCallback) => {
    setSubmitCallbacks({ ...submitCallbacks, [currentDialogIndex]: callback });
  };

  /**
   * Function to handle the modal close action, triggers the next function.
   */
  const handleClose = () => {
    next();
  };

  /**
   * Function to handle dot navigation click, sets the current dialog index.
   * @param {number} dotIndex - The index of the dot clicked.
   */
  const handleDotClick = (dotIndex: number) => {
    if (dotIndex < currentDialogIndex) {
      setCurrentDialogIndex(dotIndex);
    }
  };

  return (
    <DialogContext.Provider
      value={{
        next,
        disableNext,
        enableNext,
        isNextEnabled: isNextDisabled == false,
        attachSubmit,
      }}
    >
      <Modal isOpen={isOpen} isCentered onClose={handleClose} {...modalProps}>
        <ModalOverlay />
        {children.length > 0 && (
          <ModalContent>
            <ModalHeader textAlign="center">{children[currentDialogIndex].title}</ModalHeader>
            {!children[currentDialogIndex].notClosable && (
              <ModalCloseButton position="absolute" right="8px" top="8px" />
            )}
            <ModalBody>{children[currentDialogIndex].content}</ModalBody>
            <ModalFooter justifyContent="space-between">
              {children.length > 1 && (
                <HStack spacing="2" justifyContent="center" flex="1">
                  {children.map((_, dotIndex) => (
                    <Tooltip label={children[dotIndex].title} key={dotIndex}>
                      <Box
                        onClick={() => handleDotClick(dotIndex)}
                        w="2"
                        h="2"
                        bg={currentDialogIndex === dotIndex ? 'blue.500' : 'gray.200'}
                        borderRadius="full"
                        cursor="pointer"
                      />
                    </Tooltip>
                  ))}
                </HStack>
              )}
              <Button
                variant="minimalist"
                as="button"
                cursor="pointer"
                ml="auto"
                onClick={() => next()}
                isDisabled={isNextDisabled}
              >
                {currentDialogIndex === children.length - 1 ? lastModalNextText : 'Next'}
              </Button>
              {children[currentDialogIndex].cancelable && (
                <Button
                  variant="negativeOutlined"
                  as="button"
                  cursor="pointer"
                  ml="4" // Add margin-left to create a gap
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </DialogContext.Provider>
  );
};
