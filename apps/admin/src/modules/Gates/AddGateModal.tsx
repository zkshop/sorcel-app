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
import { useEditProductMutation } from '@3shop/apollo';
import { useEffect } from 'react';

type PoapType = {
  type: 'POAP';
  poapIds: { value: string }[];
};

type NftType = {
  type: 'NFT' | "ERC20";
  network: 'POLYGON' | 'ETHEREUM' | 'XRPLEDGER';
  contractAddress: string;
};

type AddGateModalFormValues = NftType | PoapType;

// type AddGateModalFormValues<T = {}> =
//   | {
//       type: 'NFT';
//       network: 'POLYGON' | 'ETHEREUM' | 'XRPLEDGER';
//       contractAddress: string;
//       others?: T;
//     }
//   | {
//       type: 'POAP';
//       poapIds: { value: string }[];
//     };

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
    resetField,
    formState: { errors },
  } = useForm<AddGateModalFormValues>({
    resolver: yupResolver(ADD_GATE_SCHEMA),
  });

  const dispatch = useDispatch();
  const typeValue = watch('type');
  const networkValue = watch('network');

  useEffect(() => {
    if (networkValue === 'XRPLEDGER') resetField('contractAddress');
  }, [networkValue]);

  console.error(errors);
  const onSubmit = (data: AddGateModalFormValues) => {
    console.log('!data', data);
    // return;
    if (data.type === 'POAP') {
      dispatch(addPoapSegment({ ...data, poapIds: formatPoapSegment(data.poapIds) }));
    } else {
      let payload: NftType;
      switch (data.network) {
        case 'XRPLEDGER':
          type XRPValues = NftType & { issuer: string; taxon: string };
          let XRPFormValues: XRPValues = data as XRPValues;
          XRPFormValues.contractAddress = `${XRPFormValues.issuer}:${XRPFormValues.taxon}`;
          const { issuer, taxon, ...rest } = XRPFormValues;
          payload = rest;
          break;
        default:
          return;
      }
      if (payload) {
        dispatch(addNftSegment(payload));
        onClose();
      }
      // dispatch(addNftSegment(data));
    }

    onClose();
  };

  type fieldType = 'polygon' | 'ethereum' | 'xrpledger';

  const renderFields = (object: { label: string; name: string }) => {
    type RegisterParam = Parameters<typeof register>[0];
    // console.log('!object', object);
    return (
      <>
        <FormLabel mt={1} mb={1}>
          {object.label}
        </FormLabel>
        <Input {...register(object.name as RegisterParam & typeof object)} />
      </>
    );
  };

  const renderInput = (field: fieldType) => {
    return (
      <FormControl>
        {Object.entries(COLLECTION_FIELDS[field]).map(([key, value]) => renderFields(value))}
      </FormControl>
    );
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
                      <Radio value={COLLECTION_FIELDS.type.Erc20.value}>
                        {COLLECTION_FIELDS.type.Erc20.label}
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

            {typeValue === 'NFT' || typeValue === "ERC20" ? (
              <FormControl>
                <FormLabel mb={1}>{COLLECTION_FIELDS.network.label}</FormLabel>
                <Controller
                  name={COLLECTION_FIELDS.network.name}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup onChange={onChange} value={value}>
                      <HStack>
                        {[
                          COLLECTION_FIELDS.network.polygon,
                          COLLECTION_FIELDS.network.ethereum,
                          COLLECTION_FIELDS.network.chiliz,
                        ].map((field) => (
                          <Radio value={field.value}>{field.label}</Radio>
                        ))}
                      </HStack>
                    </RadioGroup>
                  )}
                />
              </FormControl>
            ) : null}
            {(typeValue === 'POAP' && <PoapSelector control={control} />) || (
              <>{networkValue && renderInput(networkValue.toLowerCase() as fieldType)}</>
            )}
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
