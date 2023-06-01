import {
  BackButton,
  Box,
  Button,
  CloseIcon,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  MainLayout,
  Section,
} from '@3shop/ui';
import type { FieldArrayWithId, FieldErrors, UseFormRegister, Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { AddPollFormHeader } from './AddPollFormHeader';
import { POLL_FIELDS } from './constants';
import type { AddPollFormValues } from '../../pages/AddPollContainer';
import type { UseFormHandleSubmit } from 'react-hook-form/dist/types';
import { Dropzone } from '../Dropzone';

type AddPollProps = {
  onSubmit: (data: AddPollFormValues) => void;
  handleSubmit: UseFormHandleSubmit<AddPollFormValues>;
  register: UseFormRegister<AddPollFormValues>;
  control: Control<AddPollFormValues>;
  errors: FieldErrors<AddPollFormValues>;
  addChoice(): void;
  deleteChoice(index: number): void;
  fields: FieldArrayWithId<AddPollFormValues, 'choices', 'id'>[];
  loading: boolean;
};

export const AddPoll = ({
  onSubmit,
  handleSubmit,
  register,
  control,
  errors,
  deleteChoice,
  addChoice,
  fields,
  loading,
}: AddPollProps) => (
  <MainLayout>
    <form onSubmit={handleSubmit(onSubmit)}>
      <AddPollFormHeader loading={loading} />
      <BackButton href="/app" />

      <Section>
        <Heading fontSize="xl">Poll</Heading>

        {/* Poll */}
        <FormControl isInvalid={Boolean(errors[POLL_FIELDS.poll.name])}>
          <FormLabel mb={1}>{POLL_FIELDS.poll.label}</FormLabel>
          <Input {...register(POLL_FIELDS.poll.name)} />
          <FormErrorMessage>{errors[POLL_FIELDS.poll.name]?.message}</FormErrorMessage>
        </FormControl>

        {/* Gate */}
        <FormControl isInvalid={Boolean(errors[POLL_FIELDS.gate.name])}>
          <FormLabel mb={1}>{POLL_FIELDS.gate.label}</FormLabel>
          <Input {...register(POLL_FIELDS.gate.name)} />
          <FormErrorMessage>{errors[POLL_FIELDS.gate.name]?.message}</FormErrorMessage>
        </FormControl>

        {/* Image */}
        <FormControl isInvalid={Boolean(errors.image)}>
          <FormLabel htmlFor="image" mb={1}>
            Image
          </FormLabel>
          <Controller
            name="image"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Dropzone value={value} onChange={onChange} />
            )}
          />

          <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
        </FormControl>
      </Section>

      <Section>
        <Heading fontSize="xl">
          Choices
          <Button float="right" onClick={addChoice}>
            + Add Choice
          </Button>
        </Heading>

        {fields.map((field, index) => (
          <FormControl key={field.id} isInvalid={Boolean(errors.choices?.[index]?.value)}>
            <FormLabel mb={1}>
              {POLL_FIELDS.choices.label} {index + 1}
              <Box float="right">
                <CloseIcon onClick={() => deleteChoice(index)} />
              </Box>
            </FormLabel>
            <Input {...register(`choices.${index}.value` as const)} />
            <FormErrorMessage>{errors.choices?.[index]?.value?.message}</FormErrorMessage>
          </FormControl>
        ))}

        <FormControl isInvalid={Boolean(errors.choices)}>
          <FormErrorMessage>{errors.choices?.message}</FormErrorMessage>
        </FormControl>
      </Section>
    </form>
  </MainLayout>
);
