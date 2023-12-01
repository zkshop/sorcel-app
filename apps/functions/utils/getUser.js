'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getUser = void 0;
const hasura_1 = __importDefault(require('./hasura'));
// TODO: use generated documents from @3shop/apollo
async function getUser(email) {
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
    const data = await hasura_1.default.query(payload);
    return data?.data?.user_by_pk;
  } catch (error) {
    console.error(error);
  }
}
exports.getUser = getUser;
