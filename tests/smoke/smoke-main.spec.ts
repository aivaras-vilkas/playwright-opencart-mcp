import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test.beforeEach(async ({ page }) => {
  await page.context().clearCookies();
  await page.context().clearPermissions();
});

test('Smoke: homepage loads', async ({ page }) => {
  const main = new MainPage(page);
  await main.goToHomepage();
  await expect(main.logo).toBeVisible();
  
});
