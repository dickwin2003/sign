/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB: D1Database;
}

declare module "@remix-run/server-runtime" {
  export interface AppLoadContext {
    env: Env;
  }
}
