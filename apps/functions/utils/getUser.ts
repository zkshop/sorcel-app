import hasura from './hasura';

// TODO: use generated documents from @3shop/apollo
export async function getUser(email: string) {
  const query = `
  {
    user_by_pk(email: "${email}") {
      app_id
      email
      id
      role
    }
  }`;

  const payload = {
    query,
  };

  try {
    const data = await hasura.query(payload);

    return data?.data?.user_by_pk;
  } catch (error) {
    console.error(error);
  }
}
