declare namespace NodeJS {
  export interface ProcessEnv {
    API_KEY: string;
    SESSION_KEY: string;
    UPSTASH_REDIS_REST_URL: string;
    UPSTASH_REDIS_REST_TOKEN: string;
  }
}
