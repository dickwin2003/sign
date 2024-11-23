import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { resolve } from "path";

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
      serverModuleFormat: "cjs",
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
        "buffer",
        "crypto",
        "events",
        "path",
        "process",
        "stream",
        "string_decoder",
        "url",
        "util",
        "zlib"
      ],
      protocolImports: true,
    }),
  ],
  build: {
    target: "es2020",
    rollupOptions: {
      external: [
        "crypto",
        "stream",
        "events",
        "path",
        "process",
        "url",
        "util",
        "zlib",
      ],
    },
  },
  optimizeDeps: {
    exclude: ['chrome-extension'],
  },
  server: {
    port: 3000,
    fs: {
      strict: false,
      allow: ['..']
    },
  },
});
