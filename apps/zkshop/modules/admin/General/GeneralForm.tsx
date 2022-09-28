import { Box, Heading, HStack } from "@chakra-ui/react";
import { useUpdateAppMutation } from "libs/apollo/generated";
import { useForm } from "react-hook-form";
import { Button, FormField } from "ui";

type GeneralFormValues = {
  name: string;
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
      <Heading as="h2" minWidth="300px">
        <HStack justifyContent="space-between">
          <span> General </span>
          <Button type="submit">Save</Button>
        </HStack>
      </Heading>

      <Box
        my={4}
        sx={{
          bg: "white",
          borderRadius: "8px",
          p: 8,
          border: "1px solid lightgrey",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label="App Name"
            name="name"
            maxWidth={32}
            register={register}
          />
        </form>
      </Box>
    </Box>
  );
};
