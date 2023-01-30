import hasura from './hasura';

export async function addAccountIdToApp(moneyAccountId: string, appId: string) {
  const query = `
		mutation {
			update_app_by_pk(pk_columns: {id: "${appId}"}, _set: {moneyAccountId: "${moneyAccountId}"}) {
				id
				name
			}
		}`;

  const payload = {
    query,
  };

  const data = await hasura.mutate(payload);

  return data?.data?.update_app_by_pk;
}
