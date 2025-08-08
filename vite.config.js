import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
<<<<<<< HEAD
    minify: 'esbuild',
    sourcemap: false,
    target: 'esnext',
  },
});
=======
    minify: 'esbuild',        // avoid terser (which may inject eval)
    sourcemap: false,         // disable source maps that rely on eval
    target: 'esnext',         // ensure modern JS output
  },
});
>>>>>>> 794855189e1086e45907bbf6a25490357d4186a7
