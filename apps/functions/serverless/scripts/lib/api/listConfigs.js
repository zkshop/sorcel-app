import {google} from 'googleapis';
const apiGateway = google.apigateway('v1');

export async function listConfigs(api) {
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-platform']
  });
  const authClient = await auth.getClient();

  const projectId = await auth.getProjectId();
  const parent = `projects/${projectId}/locations/global/apis/${api}`;
  console.log(`! parent [${parent}]`);

  const res = await apiGateway.projects.locations.apis.configs.list({
    auth: authClient,
    parent: parent
  });
  return res;
}