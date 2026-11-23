import { Page, Locator } from "@playwright/test";

export class TablesPage {
  readonly page: Page;
  readonly idComponent: Locator;
  readonly EmailInput: Locator;
  readonly EmailComponent: Locator;
  readonly editIcon: Locator;
  readonly checkIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.idComponent = page.getByRole("row").filter({
      has: page.getByRole("cell").nth(1).getByText("1", { exact: true }),
    });
    this.editIcon = this.idComponent.locator(".nb-edit");
    this.EmailInput = this.idComponent
      .locator("tbody")
      .getByPlaceholder("E-mail");
    this.checkIcon = this.idComponent.locator("tbody").locator(".nb-checkmark");
    this.EmailComponent = this.idComponent.locator("td").nth(5);
  }

  async EditFirstRow(email: string) {
    await this.editIcon.click();
    await this.EmailInput.fill(email);
    await this.checkIcon.click();
  }
}
