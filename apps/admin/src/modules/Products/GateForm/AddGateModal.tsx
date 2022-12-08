import {
<<<<<<< HEAD
  FormControl,
  FormErrorMessage,
=======
>>>>>>> dbf5779 (feat(admin): form to add gate to product)
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
<<<<<<< HEAD
  useToast,
  Button,
} from 'ui';
import { yupResolver } from '@hookform/resolvers/yup';
=======
} from '@chakra-ui/react';
>>>>>>> dbf5779 (feat(admin): form to add gate to product)
import { useCreateGateMutation } from 'apollo';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
<<<<<<< HEAD:apps/zkshop/modules/admin/Products/GateForm/AddGateModal.tsx
import { fetchNFTAttributes } from 'store/slices/nftAttributes';
import { useAppDispatch, useAppSelector } from 'store/store';
<<<<<<< HEAD
=======
import { fetchNFTAttributes, useAppDispatch, useAppSelector } from 'admin-store';

>>>>>>> db9321b (refactor(admin): make app admin compile with just product list and general form):apps/admin/src/modules/Products/GateForm/AddGateModal.tsx
import { ADD_GATE_MODAL_SCHEMA } from './AddGateModalSchema';

import { GateFields } from './GateFields';
=======
import { Button } from 'ui';
>>>>>>> dbf5779 (feat(admin): form to add gate to product)

import { GateFields } from './GateFields';

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
<<<<<<< HEAD
  const methods = useForm<AddGateFormValues>({
    resolver: yupResolver(ADD_GATE_MODAL_SCHEMA),
  });
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = methods;
=======
  const methods = useForm<AddGateFormValues>();
  const { handleSubmit, register, watch } = methods;
>>>>>>> dbf5779 (feat(admin): form to add gate to product)
  const contractAddressValue = watch('contractAddress');
  const [createGate, { loading: createGateLoading }] = useCreateGateMutation();
  const router = useRouter();
  const { id: productId } = router.query as { id: string };
<<<<<<< HEAD
  const toast = useToast();
=======
>>>>>>> dbf5779 (feat(admin): form to add gate to product)

  const dispatch = useAppDispatch();
  const gate = useAppSelector((state) => state.gates);
  const nftAttributes = useAppSelector((state) => state.nftAttributes.hits);
<<<<<<< HEAD
  const nftAttributesLoading = useAppSelector((state) => state.nftAttributes.loading);
=======
  const loading = useAppSelector((state) => state.nftAttributes.loading);
>>>>>>> dbf5779 (feat(admin): form to add gate to product)

  const handleClickFindContractAttributes = async () => {
    dispatch(fetchNFTAttributes(contractAddressValue));
  };

  const onSubmit = async ({ discount, contractAddress }: AddGateFormValues) => {
<<<<<<< HEAD
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
=======
    await createGate({
      variables: {
        discount,
        contractAddress,
        attributes: JSON.stringify(gate),
        productId,
      },
    });
>>>>>>> dbf5779 (feat(admin): form to add gate to product)
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
<<<<<<< HEAD
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
=======
                <Input
                  placeholder="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
                  {...register('contractAddress')}
                />
                <Button onClick={handleClickFindContractAttributes}>Find</Button>
              </HStack>

              {loading ? <Spinner /> : <GateFields nftAttributes={nftAttributes} />}
            </ModalBody>
            <ModalFooter>
              <Button backgroundColor="red" color="white" onClick={onClose} mr={3}>
                Cancel
              </Button>
              <Button type="submit">Add</Button>
>>>>>>> dbf5779 (feat(admin): form to add gate to product)
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};
