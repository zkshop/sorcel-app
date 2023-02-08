import { useDeleteDeliveryZoneMutation, useGetDeliveryZonesQuery } from '@3shop/apollo';
import type { Nullable } from '@3shop/types';
import { Box, Button, Header, Spinner, Table, useDisclosure, useToast } from '@3shop/ui';
import { useState } from 'react';
import { DeleteDeliveryZoneModal } from './DeleteDeliveryZoneModal';
import { DeliveryZoneListItem } from './DeliveryZoneListItem';
import { NewDeliveryZoneModal } from './NewDeliveryZoneModal';

export type NewDeliveryZoneFormValues = {
  name: string;
  fees: number;
  countries: string[];
};

export const DeliveryFeesContainer = () => {
  const toast = useToast();
  const {
    isOpen: newDeliveryZoneModalIsOpen,
    onOpen: onNewDeliveryZoneModalOpen,
    onClose: onNewDeliveryZoneModalClose,
  } = useDisclosure();
  const {
    isOpen: deleteDeliveryZoneModalIsOpen,
    onOpen: onDeleteDeliveryZoneModalOpen,
    onClose: onDeleteDeliveryZoneModalClose,
  } = useDisclosure();

  const [zoneIdToDelete, setZoneIdToDelete] = useState<Nullable<string>>(null);

  const { data, loading } = useGetDeliveryZonesQuery();

  const [deleteDeliveryZone, { loading: deleteDeliveryZoneLoading }] =
    useDeleteDeliveryZoneMutation();

  const onOpenNewDeliveryZoneModal = () => {
    onNewDeliveryZoneModalOpen();
  };

  const onOpenDeleteDeliveryZoneModal = (id: string) => {
    setZoneIdToDelete(id);
    onDeleteDeliveryZoneModalOpen();
  };

  const onDeleteDeliveryZoneClick = async () => {
    try {
      await deleteDeliveryZone({
        variables: {
          id: zoneIdToDelete,
        },
      });

      toast({
        status: 'success',
        title: 'Delivery Zone Deleted Successfully',
        description: `Zone  has been successfully added`,
      });

      onDeleteDeliveryZoneModalClose();
    } catch (error) {
      toast({
        status: 'error',
        title: 'An error occured',
        description: 'Please try again later or contact us.',
      });
    }
  };

  return (
    <>
      <Box>
        <Header title="Delivery Zones">
          <Button float="right" onClick={onOpenNewDeliveryZoneModal}>
            + Add new Delivery Zone
          </Button>
        </Header>

        {loading ? (
          <Spinner />
        ) : (
          data && (
            <Table
              heads={['Name', 'Fees', 'Countries', '']}
              data={data.delivery_zone}
              renderRow={(deliveryZone) => (
                <DeliveryZoneListItem
                  {...deliveryZone}
                  onOpenDeleteDeliveryZoneModal={onOpenDeleteDeliveryZoneModal}
                />
              )}
            />
          )
        )}
      </Box>
      <NewDeliveryZoneModal
        onClose={onNewDeliveryZoneModalClose}
        isOpen={newDeliveryZoneModalIsOpen}
      />
      <DeleteDeliveryZoneModal
        isDeleteLoading={deleteDeliveryZoneLoading}
        isOpen={deleteDeliveryZoneModalIsOpen}
        onClose={onDeleteDeliveryZoneModalClose}
        onDeleteDeliveryZoneClick={onDeleteDeliveryZoneClick}
      />
    </>
  );
};
