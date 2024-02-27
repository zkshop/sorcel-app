import hasura from './hasura';

export async function createExampleProducts(appId: string, image_url: string, image_url_2: string) {
  const query = `
    mutation {
      createExampleProducts(app_id: "${appId}", image_url: "${image_url}", image_url_2: "${image_url_2}") {
      insert_product(objects: [
        {
          app_id: $app_id,
          type: COMMERCE,
          price: 0,
          name: "Bored ape shirt",
          image: $image_url,
          description: "Bored ape shirt for bored ape holders !",
          gate: {
            data: {
              chain: "EVM",
              app_id: $app_id,
              exclusive_access: true,
              segments: {
                data: {
                  network: ETHEREUM,
                  nft_contract_address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                  type: NFT
                }
              },
              name: "Bored ape Gate"
            }
          }
        },
        {
          app_id: $app_id,
          type: MODAL,
          price: 0,
          webhookUrl: "webhook_url_value",
          name: "Somaverse ticket",
          image: $image_url_2,
          description: "Ticket for somaverse expo",
          gate: {
            data: {
              chain: "EVM",
              app_id: $app_id,
              exclusive_access: true,
              segments: {
                data: {
                  network: ETHEREUM,
                  nft_contract_address: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
                  type: NFT
                }
              },
              name: "Doodle Gate"
            }
          }
        }
      ]) {
        returning {
          app_id
        }
      }
    }
  }`;

  const payload = {
    query,
  };

  const data = await hasura.mutate(payload);

  return data;
}
