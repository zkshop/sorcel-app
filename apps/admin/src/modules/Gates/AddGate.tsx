import { AddGateModal } from './AddGateModal';
import { PerkFields } from './PerkFields';
import { GeneralFields } from './GeneralFields';
import { AddGateFormHeader } from './AddGateFormHeader';
import { Button, Heading, MainLayout, Section, Table, useDisclosure } from '@3shop/ui';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '@3shop/admin-store';
import { SegmentTableItem } from './SegmentTableItem';

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

  const segments = useAppSelector((state) => state.segments);
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

          <Table data={segments} renderRow={SegmentTableItem} />
        </Section>
      </form>

      <AddGateModal isOpen={isOpen} onClose={onClose} />
    </MainLayout>
  );
};
