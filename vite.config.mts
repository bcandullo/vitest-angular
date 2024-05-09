/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(({ mode }) => ({
  plugins: [angular()],
  test: {
    globals: true,
    watch: true,
    setupFiles: ['src/test-setup.ts'],
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,ts}'],
    reporters: ['default'],
  },
}));
