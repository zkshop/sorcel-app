import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useUpdateAppMutation } from "../../../libs/apollo/generated";

import FormField from "../../FormField";

type GeneralFormValues = {
  name: string;
};

type GeneralFormProps = {
  defaultValues: GeneralFormValues;
};

const GeneralForm = ({ defaultValues }: GeneralFormProps) => {
  const { handleSubmit, register } = useForm<GeneralFormValues>({
    defaultValues,
  });

  const [updateApp, { loading }] = useUpdateAppMutation();

  const onSubmit = async (data: GeneralFormValues) => {
    try {
      const res = await updateApp({
        variables: {
          newName: data.name,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box>
      <Heading as="h3">General</Heading>
      <Box my={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label="App Name"
            name="name"
            maxWidth={32}
            register={register}
          />
          <Button type="submit" mt={2}>
            Update
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default GeneralForm;
