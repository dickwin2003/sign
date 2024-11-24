import { createRequestHandler } from "@remix-run/cloudflare";
import * as build from "../build/server/index.js";

const handleRequest = createRequestHandler(build, process.env.NODE_ENV);

export const onRequest: PagesFunction = async (context) => {
  try {
    return await handleRequest(context.request, {
      ...context.env,
      DB: context.env.DB
    }, context);
  } catch (error) {
    console.error('Error handling request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
