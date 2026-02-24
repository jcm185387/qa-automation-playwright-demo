import { test, expect } from '@playwright/test';

test('demo setup', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
