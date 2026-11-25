import { Page, Locator } from "@playwright/test";

export class TablePage {
  readonly page: Page;
  readonly tableRowId: Locator;
  readonly editRow: Locator;
  readonly editIcon: Locator;
  readonly emailInput: Locator;
  readonly checkIcon: Locator;
  readonly emailComponent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tableRowId = page.getByRole("row").filter({
      has: page.getByRole("cell").nth(1).getByText("1", { exact: true }),
    });
    this.editRow = page
      .locator("tbody")
      .getByRole("row")
      .filter({ has: page.getByPlaceholder("ID") });

    this.editIcon = this.tableRowId.locator(".nb-edit");
    this.emailInput = this.editRow.getByPlaceholder("E-mail");
    this.checkIcon = this.editRow.locator(".nb-checkmark");
    this.emailComponent = this.tableRowId.locator("td").nth(5);
  }

  async editFirstRow(email: string) {
    await this.editIcon.click();
    await this.emailInput.fill(email);
    await this.checkIcon.click();
  }
}
