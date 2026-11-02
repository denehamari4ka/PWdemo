import { Page, Locator } from "@playwright/test";

export class UsingTheGrid {
  readonly page: Page;
  readonly usingTheGrigInputEmail: Locator;
  readonly usingTheGridPasswordInput: Locator;
  readonly usingTheGridRadioOption1: Locator;
  readonly usingTheGridRadioOption2: Locator;
  readonly usingTheGridRadioDisabledOption: Locator;
  readonly usingTheGridSignInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usingTheGrigInputEmail = page.getByRole("textbox", { name: "Email" });
    this.usingTheGridPasswordInput = page.getByRole("textbox", {
      name: "Password",
    });
    this.usingTheGridRadioOption1 = page.getByRole("radio", {
      name: "Option 1",
    });
    this.usingTheGridRadioOption2 = page.getByRole("radio", {
      name: "Option 2",
    });
    this.usingTheGridRadioDisabledOption = page.getByRole("radio", {
      name: "Disabled Option",
    });
    this.usingTheGridSignInButton = page.getByRole("button", {
      name: "Sign In",
    });
  }

  async formLayoutsPage() {
    await this.page.getByText("Forms").click();
    await this.page.getByText("Form Layouts").click();
  }

  async usingTheGridSignIn(email: string, password: string) {
    await this.usingTheGrigInputEmail.fill(email);
    await this.usingTheGridPasswordInput.fill(password);
    await this.usingTheGridRadioOption1.isChecked();
    await this.usingTheGridRadioOption2.isChecked();
    await this.usingTheGridRadioDisabledOption.isChecked();
    await this.usingTheGridSignInButton.click();
  }
}
