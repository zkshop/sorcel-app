import type { GetGates_V2Query } from '@3shop/apollo';
import { GetGates_V2Document, useDeleteGateV2Mutation, useGetGates_V2Query } from '@3shop/apollo';
import type { Nullable } from '@3shop/types';

import { Link } from 'react-router-dom';

import {
  Header,
  Box,
  Button,
  Table,
  Spinner,
  useDisclosure,
  CustomModal,
  HStack,
  Text,
  useToast,
} from '@3shop/ui';
import { useState } from 'react';
import { GateListItem } from './GateListItem';
import { ROUTES_PATH } from '../../routes/Routes';

const GATES_ATTRIBUTES = ['name', 'perk', 'product', ''];

export type GateItemType = {
  name: string;
  id: string;
  exclusive_access: boolean;
  discount?: Nullable<number>;
  productId: string;
  productImage: string;
  productName: string;
  handleOpenDeleteGateModal(gate: { id: string; name: string }): void;
};

export const Gates = () => {
  const { data, loading } = useGetGates_V2Query();
  const [deleteGate, { loading: deleteGateLoading }] = useDeleteGateV2Mutation({
    update(cache, { data }) {
      const gatesCache = cache.readQuery<GetGates_V2Query>({ query: GetGates_V2Document });
      cache.modify({
        fields: {
          gate_v2: () =>
            gatesCache?.gates.filter((gate) => gate.id !== data?.delete_gate_v2_by_pk?.id) || [],
        },
      });
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGate, setSelectedGate] = useState<Nullable<{ id: string; name: string }>>(null);
  const toast = useToast();

  const handleOpenDeleteGateModal = async (gate: { id: string; name: string }) => {
    setSelectedGate(gate);
    onOpen();
  };

  const handleCloseDeleteGateModal = async () => {
    setSelectedGate(null);
    onClose();
  };

  const handleDeleteGate = async () => {
    if (!selectedGate) return;
    try {
      await deleteGate({ variables: { id: selectedGate.id } });

      onClose();
      toast({
        status: 'success',
        title: 'Gate Deleted Successfully',
        description: `Gate ${selectedGate.name} has been successfully deleted`,
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <Spinner />;

  if (!data) return <>Error</>;

  return (
    <Box>
      <Header
        title="Gates"
        tooltip="Gates are the conditions that you can set to allow exclusive access or discount for a product"
      >
        <Link to={`${ROUTES_PATH.PROTECTED.GATE}/add`}>
          <Button>+ New Gate</Button>
        </Link>
      </Header>

      <Box mt={4}>
        <Table
          data={data.gates}
          heads={GATES_ATTRIBUTES}
          renderRow={({
            id,
            exclusive_access,
            name,
            discount,
            product: { id: productId, image: productImage, name: productName },
          }) => (
            <GateListItem
              id={id}
              exclusive_access={exclusive_access}
              name={name}
              discount={discount}
              handleOpenDeleteGateModal={handleOpenDeleteGateModal}
              productId={productId}
              productImage={productImage}
              productName={productName}
            />
          )}
        />
      </Box>
      <CustomModal
        isOpen={isOpen}
        onClose={handleCloseDeleteGateModal}
        title={`Delete Gate ${selectedGate?.name}`}
        body={
          <Box>
            <Text>Are you sure you want to delete {selectedGate?.name} gate?</Text>
          </Box>
        }
        footer={
          <HStack mt={4} justifyContent="flex-end">
            <Button mr={2} onClick={onClose}>
              Cancel
            </Button>

            <Button
              variant="negative"
              onClick={handleDeleteGate}
              isDisabled={deleteGateLoading}
              isLoading={deleteGateLoading}
            >
              Delete
            </Button>
          </HStack>
        }
      />
    </Box>
  );
};
