import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly cookieBannerAccept: Locator;

  constructor(page: Page) {
    this.page = page;
    // Targeting functional web components using modern test locators
    this.cookieBannerAccept = page.locator('#accept-cookies-btn');
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  // Navigation target action
  async goto() {
    await this.page.goto('https://example.com'); 
  }

  // Localized market compliance handler (GDPR Cookie Validation)
  async handleCookieConsent() {
    if (await this.cookieBannerAccept.isVisible()) {
      await this.cookieBannerAccept.click();
    }
  }

  // Core end-to-end execution flow action
  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}
