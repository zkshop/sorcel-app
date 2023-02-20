import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ButtonGroup,
  Button,
  Input,
  FormControl,
  FormLabel,
  HStack,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
} from '@3shop/ui';
import { Controller } from 'react-hook-form';

import { useForm } from 'react-hook-form';
import { COLLECTION_FIELDS } from './constants';

type AddGateModalFormValues = {
  type: 'POAP' | 'NFT';
  network: 'POLYGON' | 'ETHEREUM';
  address: string;
};

type AddGateModalProps = {
  isOpen: boolean;
  onClose(): void;
};

export const AddGateModal = ({ isOpen, onClose }: AddGateModalProps) => {
  const { watch, control } = useForm<AddGateModalFormValues>();

  const typeValue = watch('type');
  const networkValue = watch('network');

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add gate</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel mb={1}>{COLLECTION_FIELDS.type.label}</FormLabel>
            <Controller
              name={COLLECTION_FIELDS.type.name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={onChange} value={value}>
                  <HStack>
                    <Radio value={COLLECTION_FIELDS.type.nft.value}>
                      {COLLECTION_FIELDS.type.nft.label}
                    </Radio>
                    <Radio value={COLLECTION_FIELDS.type.poap.value}>
                      {COLLECTION_FIELDS.type.poap.label}
                    </Radio>
                  </HStack>
                </RadioGroup>
              )}
            />
          </FormControl>

          {typeValue === 'NFT' ? (
            <FormControl>
              <FormLabel mb={1}>{COLLECTION_FIELDS.network.label}</FormLabel>
              <Controller
                name={COLLECTION_FIELDS.network.name}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup onChange={onChange} value={value}>
                    <HStack>
                      <Radio value={COLLECTION_FIELDS.network.polygon.value}>
                        {COLLECTION_FIELDS.network.polygon.label}
                      </Radio>
                      <Radio value={COLLECTION_FIELDS.network.ethereum.value}>
                        {COLLECTION_FIELDS.network.ethereum.label}
                      </Radio>
                    </HStack>
                  </RadioGroup>
                )}
              />
            </FormControl>
          ) : null}

          {networkValue && typeValue !== 'POAP' ? (
            <FormControl>
              <FormLabel mt={1} mb={1}>
                {COLLECTION_FIELDS.address.label}
              </FormLabel>
              <Input name={COLLECTION_FIELDS.address.name} />
            </FormControl>
          ) : null}

          {typeValue === 'POAP' ? (
            <FormControl>
              <FormLabel mt={1} mb={1}>
                {COLLECTION_FIELDS.poapId.label}
              </FormLabel>
              <NumberInput>
                <NumberInputField name={COLLECTION_FIELDS.poapId.name} />
              </NumberInput>
            </FormControl>
          ) : null}
        </ModalBody>

        <ModalFooter>
          <ButtonGroup spacing={3}>
            <Button backgroundColor="red" color="white">
              Close
            </Button>
            <Button>Save</Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
