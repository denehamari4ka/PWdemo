import { Page, Locator } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;
  readonly navigationPageAuth: Locator;
  readonly navigationPageAuthLogin: Locator;
  readonly navigationPageAuthRegister: Locator;
  readonly navigationPageForms: Locator;
  readonly navigationPageFormLayouts: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationPageAuth = page.getByText("Auth");
    this.navigationPageAuthLogin = page.getByText("Login");
    this.navigationPageAuthRegister = page.getByText("Register");
    this.navigationPageForms = page.getByText("Forms");
    this.navigationPageFormLayouts = page.getByText("Form Layouts");
  }

  async navigateToLoginPage() {
    await this.navigationPageAuth.click();
    await this.navigationPageAuthLogin.click();
  }
  async navigateToRegisterPage() {
    await this.navigationPageAuth.click();
    await this.navigationPageAuthRegister.click();
  }
  async navigateToFormLayoutsPage() {
    await this.navigationPageForms.click();
    await this.navigationPageFormLayouts.click();
  }
}
