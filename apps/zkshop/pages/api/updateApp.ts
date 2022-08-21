import client from "../../libs/apollo/client";
import { UpdateAppDocument } from "../../libs/apollo/generated";

export async function updateApp(newName: string) {
  const { data } = await client.mutate({
    mutation: UpdateAppDocument,
    variables: {
      name: newName,
    },
  });
  return { data };
}
