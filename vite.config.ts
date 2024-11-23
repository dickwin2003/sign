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
      serverModuleFormat: "esm",
      serverPlatform: "node",
      ssr: true,
      ignoredRouteFiles: ["**/.*"],
    }),
    tsconfigPaths(),
    nodePolyfills({
      include: ['crypto', 'stream', 'buffer', 'events', 'assert', 'util', 'path', 'os', 'fs', 'fs/promises'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      protocolImports: true,
    }),
  ],
  server: {
    port: 3000,
  },
  ssr: {
    target: 'node',
    format: 'esm',
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['node:crypto', 'node:stream', 'node:buffer', 'node:events', 'node:assert', 'node:util', 'node:path', 'node:os', 'node:fs', 'node:fs/promises'],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./app"),
      stream: "vite-compatible-readable-stream",
      crypto: "crypto-browserify",
    },
  },
});
