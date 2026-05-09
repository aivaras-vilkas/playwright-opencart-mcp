import { expect, Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly logo;
  readonly loginLink;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('.header-logo');
    this.loginLink = page.locator('a[href*="/login"]');
  }

  async goToHomepage() {
    await this.page.goto('/');
    await this.logo.waitFor({ timeout: 60000 });
  }
}