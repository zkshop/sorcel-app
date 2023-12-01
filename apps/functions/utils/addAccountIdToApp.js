'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.addAccountIdToApp = void 0;
const hasura_1 = __importDefault(require('./hasura'));
async function addAccountIdToApp(moneyAccountId, appId) {
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
  const data = await hasura_1.default.mutate(payload);
  return data?.data?.update_app_by_pk;
}
exports.addAccountIdToApp = addAccountIdToApp;
