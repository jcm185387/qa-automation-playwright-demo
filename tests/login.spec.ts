import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login con Page Object', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  // const flash = await loginPage.assertLoginSuccess(); Se agrega una nueva función que contemple los escenarios exitoso y fallido.
  const flash = await loginPage.getFlashMessage();

  await expect(flash).toContainText('You logged into a secure area!');
});
