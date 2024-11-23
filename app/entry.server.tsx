/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");
  
  // Add security headers
  responseHeaders.set("X-Frame-Options", "SAMEORIGIN");
  responseHeaders.set("X-XSS-Protection", "1; mode=block");
  responseHeaders.set("X-Content-Type-Options", "nosniff");
  responseHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
  
  // Set Content Security Policy
  const cspHeader = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' chrome-extension: https:",
    "style-src 'self' 'unsafe-inline' https:",
    "img-src 'self' data: https:",
    "font-src 'self' data: https:",
    "connect-src 'self' https:",
    "frame-src 'self' chrome-extension:",
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; ");
  
  responseHeaders.set("Content-Security-Policy", cspHeader);

  // Ensure proper DOCTYPE and HTML structure
  markup = `<!DOCTYPE html>${markup}`;

  return new Response(markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
