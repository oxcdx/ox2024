import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@udecode/plate-common/server': path.resolve('node_modules/@udecode/plate-common/dist/index.mjs')
    }
  }
});