import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "../build/server/index.js";

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => context.env,
});

export const onRequest = async (context) => {
  try {
    return await handleRequest(context);
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
