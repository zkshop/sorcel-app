import { Spinner } from '@3shop/ui';
import { useGetAdminAppQuery } from '@3shop/apollo';
import { CustomizationFormContainer } from '../modules/Customization/CustomizationFormContainer';

export type CustomizationFormValues = {
  backgroundColor: string;
  fontColor: string;
  font: string;
};

export const Customization = () => {
  const { data: appData, loading: appDataLoading } = useGetAdminAppQuery();

  if (appDataLoading) return <Spinner />;

  if (!appData) return <>Error</>;

  const appId = appData.app[0].id;
  const defaultValues = {
    backgroundColor: appData.app[0].background_color || undefined,
    fontColor: appData.app[0].font_color || undefined,
    font: appData.app[0].font || undefined,
  };

  return <CustomizationFormContainer appId={appId} defaultValues={defaultValues} />;
};
