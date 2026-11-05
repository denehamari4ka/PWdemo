import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginbutton: Locator;
  readonly registerLink: Locator;
  readonly emailIsRequiredError: Locator;
  readonly invalidEmail: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole("textbox", { name: "Email address" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginbutton = page.getByRole("button", { name: "Log in" });
    this.registerLink = page.getByRole("link", { name: "Register" });
    this.emailIsRequiredError = page.getByText("Email is required!");
    this.invalidEmail = page.getByText("Email should be the real one!");
  }

  async login(email: string, Password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(Password);
    await this.loginbutton.click();
  }

  async openRegisterPageFromLogin() {
    await this.registerLink.click();
    await this.registerLink.click();
  }

  async emailIsRequired() {
    await this.emailInput.focus();
    await this.emailInput.blur();
  }

  async emailShouldBeTheRealOne(email: string) {
    await this.emailInput.fill(email);
    await this.emailInput.blur();
  }
}
