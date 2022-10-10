import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Box,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Button } from 'ui';

type LoginModalProps = {
  isOpen: boolean;
  onClose(): void;
  handleSubmit: Function;
  onSubmit(data: { email: string }): Promise<void>;
  register: UseFormRegister<{ email: string }>;
};

export function LoginModal({ isOpen, onClose, handleSubmit, onSubmit, register }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent textAlign="center">
        <ModalHeader>Login with an email</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack direction="column" alignItems="stretch">
              <Input mb={2} type="email" {...register('email')} />
              <Button type="submit">Send Magic Link</Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
