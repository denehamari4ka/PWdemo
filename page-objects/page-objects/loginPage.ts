import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async formAuthPage() {
    await this.page.getByText("Auth").click();
    await this.page.getByText("Login").click();
  }
}
