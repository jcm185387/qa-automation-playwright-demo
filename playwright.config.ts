import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    /**
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    */
    // Captura screenshot en TODOS los tests 
    screenshot: 'on', 
    // Graba video en TODOS los tests 
    video: 'on',
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
  ], 
  retries: 0, 
  workers: 2,
});
