import { Box, HStack, Button, FormField, useToast, FormLabel, Heading, Section } from '@3shop/ui';
import { useForm, Controller } from 'react-hook-form';

import type { App } from '@3shop/apollo';
import { useUpdateAppMutation } from '@3shop/apollo';
import { ImageStorageClient } from '@3shop/admin-infra';
import { StorageService } from '@3shop/domains';
import { useState } from 'react';
import { ERROR_MESSAGE } from '@3shop/messages';
import { Dropzone } from '../Dropzone';

type SettingsFormValues = {
  name: string;
  imgUrl?: File | string;
  id: string;
};

type SettingsFormProps = {
  app: App;
};

const storage = StorageService(ImageStorageClient());

export const SettingsForm = ({ app }: SettingsFormProps) => {
  const { id } = app;
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, register, control } = useForm<SettingsFormValues>({
    defaultValues: { ...app, imgUrl: app.imgUrl || undefined },
  });
  const toast = useToast();

  const [updateApp] = useUpdateAppMutation();

  const onSubmit = async (data: SettingsFormValues) => {
    const variables = {
      newName: data.name,
      appId: id,
    };

    setIsLoading(true);
    try {
      if (data.imgUrl && typeof data.imgUrl !== 'string') {
        const uploadUrl = await storage.uploadPicture(data.imgUrl, 'products');
        if (app.imgUrl) await storage.deletePicture(app.imgUrl, 'products');
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
        <HStack justifyContent="space-between">
          <Heading as="h2" minWidth="300px">
            Settings
          </Heading>
          <Button isLoading={isLoading} isDisabled={isLoading} type="submit">
            Save
          </Button>
        </HStack>

        <Section>
          <FormField label="App Name" name="name" maxWidth={32} register={register} />

          {/* TODO(refacto): Unecessary Box  */}
          <Box mt={4}>
            <FormLabel>Image</FormLabel>
            <Controller
              name="imgUrl"
              control={control}
              render={({ field: { onChange, value } }: { field: any }) => (
                <Dropzone value={value} onChange={onChange} />
              )}
            />
          </Box>
        </Section>
      </form>
    </Box>
  );
};
