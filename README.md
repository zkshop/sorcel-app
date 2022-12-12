# Scripts

## Develop

```sh
yarn dev
```

## Develop for a specific app

```sh
yarn dev --filter=<app-name>...
```

This is the same principle for the other scripts.

# Deploy

## Vercel project id

```json
{
  "3shop": "prj_6jo5U6qKJMSrD1mX0w4m9RDyDe3e",
  "admin": "prj_F4PB82emJ8EMgXtGV3ua9aVxL2MM",
  "blackpool": "prj_oI0stWaCuZPs2PABFep9uFLAw5T4",
  "grandsagne": "prj_zHeIuAzUwhEJSmFsbGWlx04ACPKZ",
  "hsa": "prj_6sixBuO7TfzGi0dHqHXC9pZvkL1q",
  "p00ls": "prj_a5K4oDGK6hUcz0eXBMgOHfkhSmFM",
  "poapstudio": "prj_IIdYlZGIDzSB3J2Y4TquOHNnBinp",
  "tbw": "prj_GkIL8P4lgXOQocT5IlqqVX1LoYMz",
  "wunderpoapstudio": "prj_frLibJKOyIreaukQpotZjuH11eoN"
}
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
