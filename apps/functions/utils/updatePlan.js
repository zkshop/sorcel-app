'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.updatePlan = void 0;
const hasura_1 = __importDefault(require('./hasura'));
async function updatePlan(id, plan) {
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
    const response = await hasura_1.default.mutate(payload);
    if (!response.data) throw new Error('No data returned from API');
    return response.data.update_app.affected_rows;
  } catch (error) {
    console.error('An error occurred while updating the plan:', error);
  }
}
exports.updatePlan = updatePlan;
