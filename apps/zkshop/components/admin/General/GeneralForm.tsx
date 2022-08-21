import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FormField from "../../FormField";

type GeneralFormValues = {
  name: string;
};

const GeneralForm = () => {
  const { handleSubmit, register } = useForm<GeneralFormValues>();

  const onSubmit = (data: GeneralFormValues) => {
    console.log(data);
  };

  return (
    <Box>
      <Heading as="h3">General Form</Heading>
      <Box my={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label="App Name"
            name="name"
            maxWidth={32}
            register={register}
          />
          <Button type="submit" mt={2}>Update</Button>
        </form>
      </Box>
    </Box>
  );
};

export default GeneralForm;
