import hasura from './hasura';

type PlanEnum = 'FREE' | 'PRO';

interface UpdateResponse {
  data: {
    update_app: {
      affected_rows: number;
    };
  };
}

export async function updatePlan(id: string, plan: PlanEnum): Promise<number | undefined> {
  const mutation = `
    mutation UpdatePlan($id: uuid!, $plan: plan_enum!) {
      update_app(where: {id: {_eq: $id}}, _set: {plan: $plan}) {
        affected_rows
      }
    }`;

  const payload = {
    query: mutation,
    variables: {
      id,
      plan,
    },
  };

  try {
    const response = await hasura.mutate<UpdateResponse>(payload);

    if (!response.data) throw new Error('No data returned from API');

    return response.data.update_app.affected_rows;
  } catch (error) {
    console.error('An error occurred while updating the plan:', error);
  }
}
