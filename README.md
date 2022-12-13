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

## APP_ID

```json
{
  "blackpool": "6f306d23-cd24-44e2-9f15-9fd200c7e602",
  "grandsagne": "2b1a5788-cc27-4530-a346-a5aa674bb523",
  "hsa": "d1beb246-e732-4ab2-a52f-9cef64ac930b",
  "p00ls": "b5ee19db-47b4-4e55-845c-21824caa50ac",
  "poapstudio": "d8fa351a-7cbf-4c47-904d-7934eecd77ef",
  "tbw": "d91635d8-1e59-4e73-969c-462768a74b16",
  "wunderpoapstudio": "b2b579e0-8681-485b-9b5c-332f74edae6b"
}
```

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
