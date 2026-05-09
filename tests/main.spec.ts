import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test.beforeEach(async ({ page }) => {
  await page.context().clearCookies();
  await page.context().clearPermissions();
});

test.describe('Main page', () => {
  test('homepage loads successfully', async ({ page }) => {
    const main = new MainPage(page);
    await main.goToHomepage();
  });
});

