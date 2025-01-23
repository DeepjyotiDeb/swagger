import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
// import react from '@vitejs/plugin-react-swc';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';
import svgrPlugin from 'vite-plugin-svgr';
const reactConst = react();
// https://vite.dev/config/
export default defineConfig({
  plugins: [reactConst, svgrPlugin({ svgrOptions: { icon: true } })],
  server: {
    port: 3000,
    open: 'http://localhost:3000',
  },
  preview: {
    port: 3000,
    open: 'http://localhost:3000',
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        // NodeGlobalsPolyfillPlugin({ buffer: true }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },

  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill(),
      ],
    },
  },

  resolve: {
    alias: {
      // This Rollup aliases are extracted from @esbuild-plugins/node-modules-polyfill,
      // see https://github.com/remorses/esbuild-plugins/blob/master/node-modules-polyfill/src/polyfills.ts
      // process and buffer are excluded because already managed
      // by node-globals-polyfill
      util: 'rollup-plugin-node-polyfills/polyfills/util',
      events: 'rollup-plugin-node-polyfills/polyfills/events',
      stream: 'rollup-plugin-node-polyfills/polyfills/stream',
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
      process: 'rollup-plugin-node-polyfills/polyfills/process-es6',
    },
  },

  worker: {
    plugins: [reactConst],
    format: 'es',
  },
});
