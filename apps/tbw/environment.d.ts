declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HASHURA_API_URL: string;
      HASHURA_API_KEY: string;
    }
  }
}
