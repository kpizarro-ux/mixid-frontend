import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',        // avoid terser (which may inject eval)
    sourcemap: false,         // disable source maps that rely on eval
    target: 'esnext',         // ensure modern JS output
  },
});
