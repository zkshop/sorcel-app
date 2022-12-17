import { queryHasura } from './queryHasura';

export async function getUser(email: string) {
  const query = {
    query: `
      {
        user_by_pk(email: "${email}") {
          app_id
          email
          id
          role
        }
      }`,
  };

  try {
    const data = await queryHasura(query);

    return data?.data?.user_by_pk;
  } catch (error) {
    console.error(error);
  }
}
