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
