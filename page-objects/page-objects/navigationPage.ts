import { Page, Locator } from "@playwright/test";

export class NavigationPage {
  readonly navigationPageAuth: Locator;
  readonly navigationPageAuthLogin: Locator;
  readonly navigationPageAuthRegister: Locator;
  readonly navigationPageForms: Locator;
  readonly navigationPageFprmLayouts: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationPageAuth = page.getByText("Auth");
    this.navigationPageAuthLogin = page.getByText("Login");
    this.navigationPageAuthRegister = page.getByText("Register");
    this.navigationPageForms = page.getByText("Forms");
    this.navigationPageFprmLayouts = page.getByText("Form Layouts");
  }

  async formLayoutsPage() {
    await this.navigationPageAuth.click();
    await this.navigationPageAuthLogin.click();
    await this.navigationPageAuthRegister.click();
    await this.navigationPageForms.click();
    await this.navigationPageFprmLayouts.click();
  }
}
