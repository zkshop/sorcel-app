import { Box } from "@chakra-ui/react";
import GeneralForm from "./GeneralForm";

type GeneralProps = {
  app: { name: string };
};

const General = ({ app }: GeneralProps) => {
  return (
    <Box>
      <GeneralForm defaultValues={app} />
    </Box>
  );
};

export default General;
