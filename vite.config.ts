import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  resolve: {
    alias: {
      src: "/src",
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.ts', './src/**/*.tsx', './src/**/*.jsx'],
      exclude: [],
    }),
  ],
})