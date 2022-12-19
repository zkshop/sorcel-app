import { Box, Heading, HStack, Button, FormField, useToast } from 'ui';
import { useForm } from 'react-hook-form';

import { useUpdateAppMutation } from 'apollo';
import { ImageStorageClient } from 'admin-infra';
import { StorageService } from 'domains';
import { blobFromURL } from 'pure';
import { useState } from 'react';
import { ERROR_MESSAGE } from 'messages';

type GeneralFormValues = {
  name: string;
  imgUrl: string;
  id: string;
};

type GeneralFormProps = {
  defaultValues: GeneralFormValues;
};

const storage = StorageService(ImageStorageClient());

export const GeneralForm = ({ defaultValues }: GeneralFormProps) => {
  const { id } = defaultValues;
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, register } = useForm<GeneralFormValues>({
    defaultValues,
  });
  const toast = useToast();

  const [updateApp] = useUpdateAppMutation();

  const onSubmit = async (data: GeneralFormValues) => {
    const variables = {
      newName: data.name,
      newImgUrl: data.imgUrl,
      appId: id,
    };

    setIsLoading(true);
    try {
      if (defaultValues.imgUrl && data.imgUrl !== defaultValues.imgUrl) {
        const image = await blobFromURL(data.imgUrl);
        const uploadUrl = await storage.updatePicture(image, defaultValues.imgUrl, 'products');

        Object.assign(variables, { newImgUrl: uploadUrl });
      } else if (!defaultValues.imgUrl) {
        const image = await blobFromURL(data.imgUrl);
        const uploadUrl = await storage.uploadPicture(image, 'products');

        Object.assign(variables, { newImgUrl: uploadUrl });
      }

      await updateApp({
        variables,
      });

      toast({
        title: `App updated`,
        description: `App has been updated successfully`,
        status: 'success',
      });
    } catch (e) {
      console.error(e);
      toast(ERROR_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading as="h2" minWidth="300px">
          <HStack justifyContent="space-between">
            <span> General </span>
            <Button isLoading={isLoading} isDisabled={isLoading} type="submit">
              Save
            </Button>
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
