import hasura from './hasura';

interface UserData {
  app_id: string;
  email: string;
  id: string;
  role: string;
}

interface UserResponse {
  data: {
    insert_user_one: UserData;
  };
}

export async function createAdmin(email: string, app_id: string): Promise<UserData | undefined> {
  const mutation = `
    mutation CreateUser($email: String!, $app_id: uuid!) {
      insert_user_one(object: {email: $email, app_id: $app_id, role: "CUSTOMER"}) {
        app_id
        email
        id
        role
      }
    }`;

  const payload = {
    query: mutation,
    variables: {
      email,
      app_id,
    },
  };

  try {
    const response = await hasura.mutate<UserResponse>(payload);

    return response.data?.insert_user_one;
  } catch (error) {
    console.error('An error occurred while creating a user:', error);
  }
}
