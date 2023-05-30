import {
  BackButton,
  Button,
  CloseIcon,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  MainLayout,
  Section,
  Box,
} from '@3shop/ui';
import { AddPollFormHeader } from '../modules/Poll/AddPollFormHeader';
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import { Dropzone } from '../modules/Dropzone';
import { FormValidation } from '@3shop/validation';
import { yupResolver } from '@hookform/resolvers/yup';

const POLL_FIELDS = {
  poll: {
    name: 'poll',
    label: 'Question displayed on the poll',
  },
  image: {
    name: 'image',
    label: 'Image',
  },
  choices: {
    name: 'choices',
    label: 'Choice',
  },
} as const;

type AddPollFormValues = {
  poll: string;
  image: File;
  choices: { value: string }[];
};

const ADD_POLL_SCHEMA = FormValidation.object().shape({
  poll: FormValidation.string().required('Poll question is required'),
  image: FormValidation.mixed().required('Image is required'),
  choices: FormValidation.array()
    .of(
      FormValidation.object({
        value: FormValidation.string().required('Choice is required'),
      }),
    )
    .min(2, 'At least 2 choices are required'),
});

export const AddPoll = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<AddPollFormValues>({
    resolver: yupResolver(ADD_POLL_SCHEMA),
  });

  const { append, remove, fields } = useFieldArray({ control, name: 'choices' });

  const addChoice = () => {
    append({ value: '' });
  };

  const deleteChoice = (index: number) => {
    remove(index);
  };

  const onSubmit = (data: AddPollFormValues) => {
    console.log(data);
  };

  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddPollFormHeader loading={false} />
        <BackButton href="/app" />

        <Section>
          <Heading fontSize="xl">Poll</Heading>

          {/* Poll */}
          <FormControl isInvalid={Boolean(errors[POLL_FIELDS.poll.name])}>
            <FormLabel mb={1}>{POLL_FIELDS.poll.label}</FormLabel>
            <Input {...register(POLL_FIELDS.poll.name)} />
            <FormErrorMessage>{errors[POLL_FIELDS.poll.name]?.message}</FormErrorMessage>
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
};
