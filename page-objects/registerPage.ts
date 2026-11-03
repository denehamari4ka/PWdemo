import { Page, Locator } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;
  readonly fullNameinput: Locator;
  readonly emailAdressInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly agreeCheckbox: Locator;
  readonly registerButton: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameinput = page.getByRole("textbox", { name: "Full name" });
    this.emailAdressInput = page.getByRole("textbox", {
      name: "Email address",
    });
    this.passwordInput = page.getByPlaceholder("Password", { exact: true });
    this.confirmPasswordInput = page.getByPlaceholder("Confirm Password");
    this.agreeCheckbox = page.getByRole("checkbox", { name: " Agree to " });
    this.registerButton = page.getByRole("button", { name: "Register" });
    this.loginLink = page.getByRole("link", { name: "Login" });
  }

  async Register(
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    checkbox: boolean,
  ) {
    await this.fullNameinput.fill(name);
    await this.emailAdressInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
    if (checkbox) {
      await this.agreeCheckbox.check({ force: true });
    }
    await this.registerButton.click();
  }

  async openLoginPageFromRegister() {
    await this.loginLink.click();
    await this.loginLink.click();
  }
}
