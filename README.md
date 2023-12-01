# Develop

## Environment variables

```
npx dotenv-vault pull
yarn init:env
```

## Install dependencies

`yarn`

## Start dev server

`yarn dev`

## Test

`npx playwright install chromium`

`yarn test:e2e`

# Deploy

## APP_ID

```json
{
  "3shop-dev": "00000000-a85b-469d-884e-b049a2a51e3e",
  "grandsagne": "2b1a5788-cc27-4530-a346-a5aa674bb523",
  "p00ls": "00ff2163-7b91-4b53-8043-9f4613ed1886",
  "tbw": "d91635d8-1e59-4e73-969c-462768a74b16",
  "wunderpoapstudio": "b2b579e0-8681-485b-9b5c-332f74edae6b"
}
```

## Vercel project id

```json
{
  "3shop": "prj_mcuAxslJxpq6oXTwv49J63blOy9g",
  "admin": "prj_F4PB82emJ8EMgXtGV3ua9aVxL2MM",
  "wunderpoapstudio": "prj_frLibJKOyIreaukQpotZjuH11eoN"
}
```

## Integration

```html
<script type="text/javascript">
  window.__3SHOP_APP_ID__ = '<APP_ID>';
  (function () {
    d = document;
    s = d.createElement('script');
    s.src = 'https://cdn.3shop.co/app/index.js';
    s.async = 1;
    d.getElementsByTagName('head')[0].appendChild(s);
  })();
</script>
```

## Caching

```sh
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).
Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

# Hasura
## 1. Install hasura CLI with homebrew
``` https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/ ```

> **Important Note:** Before installing the Hasura CLI, ensure that your environment variables have been set up correctly and that the `.env` files are available in your project directory.

> **Step 1:** This should init and apply migrations, do not continue to step 2 if this script failed
```sh
export ADMIN_SECRET=<YOUR_ADMIN_SECRET>
export ENDPOINT_URL=<YOUR_ENDPOINT_URL>
export SORCEL_APP_PATH=<YOUR_SORCEL_APP_ROOT>

hasura init api
cd api
hasura migrate create init --from-server --endpoint $ENDPOINT_URL --admin-secret $ADMIN_SECRET
hasura migrate apply --endpoint $ENDPOINT_URL --admin-secret $ADMIN_SECRET
```




