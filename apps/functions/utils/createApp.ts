import type { AppData } from '@3shop/domains';
import hasura from './hasura';

interface AppResponse {
  data: {
    insert_app_one: AppData;
  };
}

export async function createApp(name: string): Promise<AppData | undefined> {
  const mutation = `
  mutation CreateApp($name: String!) {
    insert_app_one(object: {name: $name}) {
      id
      plan
      name
    }
  }`;

  const payload = {
    query: mutation,
    variables: {
      name,
    },
  };

  try {
    const response = await hasura.mutate<AppResponse>(payload);

    if (!response.data) throw new Error('No data returned from API');

    return response.data.insert_app_one;
  } catch (error) {
    console.error('An error occurred while creating an app:', error);
  }
}
