import { Box, Heading, HStack, Button, FormField } from 'ui';
import { useForm } from 'react-hook-form';

import { useUpdateAppMutation } from 'apollo';
import axios from 'axios';

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
    const variables = {
      newName: data.name,
      newImgUrl: data.imgUrl,
      appId: process.env.APP_ID,
    };

    try {
      if (data.imgUrl !== defaultValues.imgUrl) {
        const {
          data: { uploadUrl },
        } = await axios.post('/api/image/update', {
          newImageUrl: data.imgUrl,
          path: defaultValues.imgUrl,
          bucketName: 'apps',
        });

        Object.assign(variables, { newImgUrl: uploadUrl });
      }

      await updateApp({
        variables,
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
            borderRadius: 'lg',
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
