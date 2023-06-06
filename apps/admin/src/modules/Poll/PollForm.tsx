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
import type { UseFormHandleSubmit } from 'react-hook-form';
import { Dropzone } from '../Dropzone';
import type { EditPollFormValues } from './EditPollFormContainer';

type PollFormValues = AddPollFormValues | EditPollFormValues;

type AddPollProps = {
  onSubmit: (data: PollFormValues) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<PollFormValues>;
  register: UseFormRegister<PollFormValues>;
  control: Control<PollFormValues>;
  errors: FieldErrors<PollFormValues>;
  addChoice(): void;
  deleteChoice(index: number): void;
  fields: FieldArrayWithId<PollFormValues, 'choices', 'id'>[];
  loading: boolean;
};

export const PollForm = ({
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
      <BackButton href="/app/poll" />

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
