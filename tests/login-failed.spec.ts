import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login fallido con Page Object', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto(); 
    await loginPage.login('usuario_invalido', 'contraseña_invalida!'); 
    //const flash = await loginPage.assertLoginSuccess(); Nueva función genérica que devuelve el resultado en LoginPage.ts

    const flash = await loginPage.getFlashMessage();
    await expect(flash).toContainText('Your username is invalid!');

    /* Comentado para probar el test usando el POM
        // Ir a la página de login demo
        await page.goto('https://the-internet.herokuapp.com/login');

        // Llenar usuario y contraseña incorrectos
        await page.fill('#username', 'usuario_invalido');
        await page.fill('#password', 'contraseña_invalida');

        // Hacer click en el botón de login
        await page.click('button[type="submit"]');

        // Validar que aparece mensaje de error
        await expect(page.locator('#flash')).toContainText('Your username is invalid!');
  */
});
