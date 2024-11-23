import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      serverModuleFormat: "esm",
      serverPlatform: "node",
    }),
    tsconfigPaths(),
    nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      include: [
        "crypto",
        "stream",
        "fs",
        "path",
        "os",
        "util",
        "buffer",
        "assert",
        "events",
        "net",
        "url",
        "worker_threads",
        "async_hooks",
        "zlib",
        "http",
        "tls",
        "console",
        "diagnostics_channel",
        "perf_hooks",
        "http2",
        "querystring",
      ],
      protocolImports: true,
    }),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./app"),
    },
  },
  build: {
    rollupOptions: {
      external: ["stream", "crypto", "fs", "path", "os", "util"],
    },
  },
});
