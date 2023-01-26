import hasura from './hasura';

export async function addAccountIdToApp(appId: string) {
  const mutation = `
	{
			update_app_by_pk(pk_columns: {id: "${appId}"}) {
					id
					name
			}
	}`;

  const payload = {
    mutation,
  };

  try {
    const data = await hasura.mutate(payload);

    return data?.data?.update_app_by_pk;
  } catch (error) {
    console.error(error);
  }
}
