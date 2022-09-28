import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

import { ShippingForm } from "./ShippingForm";
import { ShippingFormValues } from "./types";

export const ShippingFormContainer = () => {
  const methods = useForm<ShippingFormValues>();
  const { handleSubmit } = methods;

  const router = useRouter();

  const onSubmit = async (data: ShippingFormValues) => {
    console.log(data);

    router.push(router.asPath.replace("shipping", "checkout"));
  };

  return (
    <FormProvider {...methods}>
      <ShippingForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isLoading={false}
      />
    </FormProvider>
  );
};
