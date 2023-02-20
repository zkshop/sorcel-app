import { AddGateModal } from './AddGateModal';
import { PerkFields } from './PerkFields';
import { GeneralFields } from './GeneralFields';
import { AddGateFormHeader } from './AddGateFormHeader';
import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Header,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  MainLayout,
  Section,
  VStack,
  InputRightElement,
  RadioGroup,
  Radio,
  NumberInputField,
  NumberInput,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@3shop/ui';

import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { GATE_FIELDS } from './constants';

export type AddGateFormValues = {
  name: string;
  perk: string;
  discount: number | undefined;
};

export const AddGate = () => {
  const {
    register,
    formState: { errors },
    control,
    watch,
    handleSubmit,
    setValue,
  } = useForm<AddGateFormValues>();

  const perkValue = watch('perk');

  const { isOpen, onClose, onOpen } = useDisclosure();
  const [showDiscountInput, setShowDiscountInput] = useState(false);

  const onSubmit = (data: AddGateFormValues) => console.log({ data });

  useEffect(() => {
    if (perkValue === 'discount') setShowDiscountInput(true);
    else {
      setValue('discount', undefined);
      setShowDiscountInput(false);
    }
  }, [perkValue]);

  const handleClickAddModal = () => {
    onOpen();
  };

  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddGateFormHeader />

        <GeneralFields register={register} errors={errors} />

        <PerkFields control={control} showDiscountInput={showDiscountInput} register={register} />

        <Section>
          <Heading fontSize="xl">
            Gating
            <Button
              float="right"
              isDisabled={false}
              isLoading={false}
              type="button"
              onClick={handleClickAddModal}
            >
              Add collection
            </Button>
          </Heading>
        </Section>
      </form>

      <AddGateModal isOpen={isOpen} onClose={onClose} />
    </MainLayout>
  );
};
