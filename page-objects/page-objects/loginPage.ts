import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginbutton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole("textbox", { name: "Email address" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginbutton = page.getByRole("button", { name: "Log in" });
  }

  async formAuthPage() {
    await this.page.getByText("Auth").click();
    await this.page.getByText("Login").click();
  }

  async Login(email: string, Password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(Password);
    await this.loginbutton.click();
  }
}
