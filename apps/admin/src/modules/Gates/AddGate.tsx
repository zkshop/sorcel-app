import { AddGateModal } from './AddGateModal';
import { PerkFields } from './PerkFields';
import { GeneralFields } from './GeneralFields';
import { AddGateFormHeader } from './AddGateFormHeader';
import { Button, Heading, MainLayout, Section, Table, useDisclosure } from '@3shop/ui';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '@3shop/admin-store';
import { SegmentTableItem } from './SegmentTableItem';
import type { Segment_Insert_Input } from '@3shop/apollo';
import { Network_Enum, Segment_Type_Enum, useCreateGateV2Mutation } from '@3shop/apollo';
import { ProductSelectField } from './ProductSelectField';

export type AddGateFormValues = {
  name: string;
  perk: string;
  discount: number | undefined;
  product_id: string;
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
  const [createGate] = useCreateGateV2Mutation();

  const onSubmit = (data: AddGateFormValues) => {
    const input: Segment_Insert_Input[] = segments.map((segment) =>
      segment.type === 'NFT'
        ? {
            type: Segment_Type_Enum.Nft,
            network: segment.network === 'ETHEREUM' ? Network_Enum.Ethereum : Network_Enum.Polygon,
            nft_contract_address: segment.contractAddress,
            poapIds: undefined,
          }
        : {
            type: Segment_Type_Enum.Poap,
            poapIds: segment.poapIds,
            network: undefined,
            nft_contract_address: undefined,
          },
    );

    createGate({
      variables: {
        segments: {
          data: input,
        },
        discount: data.discount,
        exclusive_access: data.perk === 'exclusiveAccess',
        name: data.name,
        product_id: data.product_id,
      },
    });
  };

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

        <Section mb={2}>
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
        <Section>
          <Heading fontSize="xl">Assign a Product</Heading>

          <ProductSelectField register={register} />
        </Section>
      </form>

      <AddGateModal isOpen={isOpen} onClose={onClose} />
    </MainLayout>
  );
};
