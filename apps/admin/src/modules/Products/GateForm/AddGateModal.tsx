import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useToast,
  Button,
} from 'ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateGateMutation } from 'apollo';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { fetchNFTAttributes, useAppDispatch, useAppSelector } from 'admin-store';

import { ADD_GATE_MODAL_SCHEMA } from './AddGateModalSchema';

import { GateFields } from './GateFields';
import { useParams } from 'react-router-dom';

type AddGateModalProps = {
  isOpen: boolean;
  onClose(): void;
  isFormValid: boolean;
};

export type AddGateFormValues = {
  contractAddress: string;
  discount: number;
};

export const AddGateModal = ({ isOpen, onClose, isFormValid }: AddGateModalProps) => {
  const methods = useForm<AddGateFormValues>({
    resolver: yupResolver(ADD_GATE_MODAL_SCHEMA),
  });
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = methods;

  const contractAddressValue = watch('contractAddress');
  const [createGate, { loading: createGateLoading }] = useCreateGateMutation();
  const { productId } = useParams();

  const toast = useToast();

  const dispatch = useAppDispatch();
  const gate = useAppSelector((state) => state.gates);
  const nftAttributes = useAppSelector((state) => state.nftAttributes.hits);
  const nftAttributesLoading = useAppSelector((state) => state.nftAttributes.loading);

  const handleClickFindContractAttributes = async () => {
    dispatch(fetchNFTAttributes(contractAddressValue));
  };

  const onSubmit = async ({ discount, contractAddress }: AddGateFormValues) => {
    try {
      await createGate({
        variables: {
          discount,
          contractAddress,
          attributes: gate,
          productId,
        },
      });
      toast({
        status: 'success',
        title: 'Gate Added Successfully',
        description: `Gate for contract ${contractAddress} has been successfully added`,
      });
    } catch (e) {
      console.error(e);
      toast({
        status: 'error',
        title: 'An error occured',
        description: 'Please try again later',
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Add Gate</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel>Enter the contract address of the NFT</FormLabel>
              <HStack>
                <FormControl isInvalid={Boolean(errors.contractAddress)}>
                  <Input
                    placeholder="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
                    {...register('contractAddress')}
                  />
                  <FormErrorMessage>{errors.contractAddress?.message}</FormErrorMessage>
                </FormControl>

                <Button onClick={handleClickFindContractAttributes}>Find</Button>
              </HStack>

              {nftAttributesLoading ? <Spinner /> : <GateFields nftAttributes={nftAttributes} />}
            </ModalBody>
            <ModalFooter>
              <Button
                backgroundColor="red"
                color="white"
                onClick={onClose}
                mr={3}
                isDisabled={createGateLoading}
              >
                Cancel
              </Button>
              <Button type="submit" isLoading={createGateLoading} isDisabled={createGateLoading}>
                Add
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};
