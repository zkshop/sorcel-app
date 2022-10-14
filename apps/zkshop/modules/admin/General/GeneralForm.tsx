import { Box, Heading, HStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Button, FormField } from 'ui';

import { useUpdateAppMutation } from 'apollo';

type GeneralFormValues = {
  name: string;
  imgUrl: string;
};

type GeneralFormProps = {
  defaultValues: GeneralFormValues;
};

export const GeneralForm = ({ defaultValues }: GeneralFormProps) => {
  const { handleSubmit, register } = useForm<GeneralFormValues>({
    defaultValues,
  });

  const [updateApp] = useUpdateAppMutation();

  const onSubmit = async (data: GeneralFormValues) => {
    try {
      await updateApp({
        variables: {
          newName: data.name,
          newImgUrl: data.imgUrl,
          appId: process.env.APP_ID,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading as="h2" minWidth="300px">
          <HStack justifyContent="space-between">
            <span> General </span>
            <Button type="submit">Save</Button>
          </HStack>
        </Heading>

        <Box
          my={4}
          sx={{
            bg: 'white',
            borderRadius: '8px',
            p: 8,
            border: '1px solid lightgrey',
          }}
        >
          <FormField label="App Name" name="name" maxWidth={32} register={register} />

          {/* TODO(refacto): Unecessary Box  */}
          <Box mt={4}>
            <FormField label="Image" name="imgUrl" maxWidth={64} register={register} />
          </Box>
        </Box>
      </form>
    </Box>
  );
};
