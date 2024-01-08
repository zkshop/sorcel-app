import { AddGateModal } from './AddGateModal';
import { PerkFields } from './PerkFields';
import { GeneralFields } from './GeneralFields';
import { AddGateFormHeader } from './AddGateFormHeader';
import {
  BackButton,
  Button,
  Heading,
  MainLayout,
  Section,
  Table,
  useDisclosure,
  useToast,
} from '@3shop/ui';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '@3shop/admin-store';
import { SegmentTableItem } from './SegmentTableItem';
import type { GetGatesQuery, Segment_Insert_Input } from '@3shop/apollo';
import { GetGates_V2Document, useCreateGateV2Mutation } from '@3shop/apollo';
import { ProductSelectField } from './ProductSelectField';
import segmentInputCreator from './segmentInputCreator';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../../routes/Routes';

export type AddGateFormValues = {
  name: string;
  perk: string;
  discount: number | undefined;
  uniqueClaim: boolean;
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
  const [createGate, { loading }] = useCreateGateV2Mutation({
    update(cache, { data }) {
      const gatesCache = cache.readQuery<GetGatesQuery>({ query: GetGates_V2Document });
      cache.modify({
        fields: {
          gate_v2: () => [...(gatesCache ? gatesCache.gates : []), data?.insert_gate_v2_one],
        },
      });
    },
  });
  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = async (data: AddGateFormValues) => {
    const input: Segment_Insert_Input[] = segments.map(segmentInputCreator);
    // console.log("!here dfgkndfg", data);
    // console.log("!input", input);
    // console.log("!segments", segments);
    // return ;

    try {
      await createGate({
        variables: {
          segments: {
            data: input,
          },
          unique_claim: data.uniqueClaim,
          discount: data.discount,
          exclusive_access: data.perk === 'exclusiveAccess',
          name: data.name,
          product_id: data.product_id,
        },
      });

      toast({
        title: 'Success',
        description: `Gate ${data.name} created`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      navigate(ROUTES_PATH.PROTECTED.GATE);
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
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
        <AddGateFormHeader loading={loading} />
        <BackButton href="/app" />
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
