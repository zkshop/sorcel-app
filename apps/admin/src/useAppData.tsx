import { useGetAdminAppQuery, Plan_Enum } from '@3shop/apollo';

export type AppData = {
  name: string;
  id: string;
  plan: Plan_Enum;
  moneyAccountId?: string;
};

type ReturnType =
  | {
      data: AppData;
      loading: false;
      error: null;
    }
  | {
      data: null;
      loading: true;
      error: null;
    }
  | {
      data: null;
      loading: false;
      error: Error;
    };

export const useAppData = (): ReturnType => {
  const { data: appData, loading, error } = useGetAdminAppQuery();

  if (loading) return { data: null, loading: true, error: null };

  if (error) return { data: null, loading: false, error };

  const data: AppData = {
    name: appData?.app[0].name || '',
    id: appData?.app[0].id || '',
    plan: appData?.app[0].plan || Plan_Enum.Free,
    moneyAccountId: appData?.app[0].moneyAccountId || undefined,
  };

  return { data, loading: false, error: null };
};
