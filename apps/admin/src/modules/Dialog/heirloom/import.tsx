import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDialog, type dialog } from '@3shop/ui/Modal/Dialogs';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@3shop/ui';
import { z, ZodError } from 'zod';
import { useState } from 'react';
import { sorcelApp } from '../../../api/sorcel-app/sorcel-app';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  apiKey: z.string().min(1, 'API Key is required')
});

type FieldErrors = {
  [key: string]: { message: string };
};

const ImportContent = () => {
  const { attachSubmit, next } = useDialog();
  const [hasSubmit, setHasSubmit] = useState(false);
  const { handleSubmit, control, register, formState: { errors } } = useForm<z.infer<typeof schema>>({
    defaultValues: {
      name: '',
      apiKey: ''
    },
    resolver: async (data) => {

      try {
        schema.parse(data);
        return { values: data, errors: {} };
      } catch (e) {
        if (e instanceof ZodError) {
          const fieldErrors = e.errors.reduce((acc: FieldErrors, curr) => {
            acc[curr.path[0] as string] = { message: curr.message };
            return acc;
          }, {});
          return { values: {}, errors: fieldErrors };
        }
        throw e;
      }
    }
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      const sorcelAppInstance = new sorcelApp();
      await sorcelAppInstance.updateHeirloomLock(data.apiKey, data.name);
      alert('Heirloom lock updated successfully');
    } catch (error) {
      console.error('Error updating heirloom lock:', error);
      alert('Failed to update heirloom lock');
    }
  };

  useEffect(() => {
    attachSubmit(() => {
      handleSubmit(onSubmit)();
      setHasSubmit(true);
      return false;
    });
  }, [handleSubmit, errors]);

  useEffect(() => {
    setHasSubmit(false);
    if (hasSubmit) {
      if (Object.keys(errors).length == 0)
        next(true);
    }
  }, [errors]);

  return (
    <Box padding="20px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={Boolean(errors.name)}>
          <FormLabel>{"Name"}</FormLabel>
          
          <Input type="text" {...register('name')} />
          {errors.name && <Text color="red.500">{errors.name.message}</Text>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.apiKey)}>
          <FormLabel>API Key</FormLabel>
          <Input type="text" {...register('apiKey')} />
          {errors.apiKey && <Text color="red.500">{errors.apiKey.message}</Text>}
        </FormControl>
      </form>
    </Box>
  );
};

export const importDialog: dialog = {
  title: 'Import your lock',
  content: <ImportContent />,
  notClosable: true,
  size: 'md',
};
