import { addNftSegment, addPoapSegment, formatPoapSegment } from '@3shop/admin-store';
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
  Radio,
  RadioGroup,
  FormErrorMessage,
} from '@3shop/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller } from 'react-hook-form';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { COLLECTION_FIELDS } from './constants';
import ADD_GATE_SCHEMA from './schemas';
import { PoapSelector } from './PoapSelector';

type AddGateModalFormValues =
  | {
      type: 'NFT';
      network: 'POLYGON' | 'ETHEREUM';
      contractAddress: string;
    }
  | {
      type: 'POAP';
      poapIds: { value: string }[];
    };

type AddGateModalProps = {
  isOpen: boolean;
  onClose(): void;
};

export const AddGateModal = ({ isOpen, onClose }: AddGateModalProps) => {
  const {
    watch,
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddGateModalFormValues>({
    resolver: yupResolver(ADD_GATE_SCHEMA),
  });

  const dispatch = useDispatch();
  const typeValue = watch('type');
  const networkValue = watch('network');

  const onSubmit = (data: AddGateModalFormValues) => {
    if (data.type === 'POAP') {
      dispatch(addPoapSegment({ ...data, poapIds: formatPoapSegment(data.poapIds) }));
    } else {
      dispatch(addNftSegment(data));
    }

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add gate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired={Boolean(errors[COLLECTION_FIELDS.type.name])}>
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
              <FormErrorMessage>{errors[COLLECTION_FIELDS.type.name]?.message}</FormErrorMessage>
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
                  {COLLECTION_FIELDS.contractAddress.label}
                </FormLabel>
                <Input {...register(COLLECTION_FIELDS.contractAddress.name)} />
              </FormControl>
            ) : null}

            {typeValue === 'POAP' ? <PoapSelector control={control} /> : null}
          </ModalBody>

          <ModalFooter>
            <ButtonGroup spacing={3}>
              <Button onClick={onClose} backgroundColor="red" color="white">
                Close
              </Button>
              <Button type="submit">Save</Button>
            </ButtonGroup>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
