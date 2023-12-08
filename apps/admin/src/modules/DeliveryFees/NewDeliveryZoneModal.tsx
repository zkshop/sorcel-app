import { useCreateDeliveryZoneMutation } from '@3shop/apollo';
import { Button, FormLabel } from '@3shop/ui';
import {
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useToast,
} from '@3shop/ui';
import { useForm } from 'react-hook-form';
import { DELIVERY_ZONE_FIELD } from './constants';
import { CountrySelectField } from './CountrySelectField';
import type { NewDeliveryZoneFormValues } from './DeliveryFeesContainer';

type NewDeliveryZoneModalProps = {
  isOpen: boolean;
  onClose(): void;
};

export const NewDeliveryZoneModal = ({ isOpen, onClose }: NewDeliveryZoneModalProps) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
  } = useForm<NewDeliveryZoneFormValues>();
  const [createDeliveryZone, { loading }] = useCreateDeliveryZoneMutation();
  const toast = useToast();

  const onSubmit = async (data: NewDeliveryZoneFormValues) => {
    try {
      await createDeliveryZone({
        variables: {
          countries: data.countries,
          fees: data.fees,
          name: data.name,
        },
      });

      toast({
        status: 'success',
        title: 'Delivery Zone Added Successfully',
        description: `Zone ${data.name} has been successfully added`,
      });

      onClose();
    } catch (e) {
      toast({
        status: 'error',
        title: 'An error occured',
        description: 'Please try again later or contact us.',
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>New Delivery Zone</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <FormControl isInvalid={Boolean(errors.name)}>
                <FormLabel mb={1}>{DELIVERY_ZONE_FIELD.name.label}</FormLabel>
                <Input
                  placeholder={DELIVERY_ZONE_FIELD.name.placeholder}
                  {...register(DELIVERY_ZONE_FIELD.name.name)}
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={Boolean(errors.fees)}>
                <FormLabel mb={1}>{DELIVERY_ZONE_FIELD.fees.label}</FormLabel>
                <Input
                  placeholder={DELIVERY_ZONE_FIELD.fees.placeholder}
                  {...register(DELIVERY_ZONE_FIELD.fees.name)}
                />
                <FormErrorMessage>{errors.fees?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={Boolean(errors.countries)}>
                <FormLabel mb={1}>{DELIVERY_ZONE_FIELD.countries.label}</FormLabel>
                <CountrySelectField setFieldValue={setValue} register={register} />
                <FormErrorMessage>{errors.countries?.message}</FormErrorMessage>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              color="white"
              backgroundColor="red"
              isDisabled={loading}
              onClick={onClose}
              mr={3}
            >
              Cancel
            </Button>
            <Button isLoading={loading} isDisabled={loading} type="submit">
              Add
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
