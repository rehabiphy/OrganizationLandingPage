import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// All components use the .js extension, so tell Vite/esbuild to parse
// .js files inside src/ as JSX.
export default defineConfig({
  plugins: [react({ include: /\.(js|jsx)$/ })],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
});
