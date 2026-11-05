import { Page, Locator } from "@playwright/test";

export class ModalandOverlaysPage {
  readonly page: Page;
  readonly openDialogWithComponentButton: Locator;
  readonly dialogWithComponent: Locator;
  readonly dialogWithComponentTitle: Locator;
  readonly dialogWithComponentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.openDialogWithComponentButton = page.getByRole("button", {
      name: "Open Dialog with component",
    });
    this.dialogWithComponent = page.locator("nb-dialog-container");
    this.dialogWithComponentButton = page.getByRole("button", {
      name: "Dismiss Dialog",
    });
    this.dialogWithComponentTitle = page.getByText(
      "This is a title passed to the dialog component",
    );
  }

  async openDialogWithComponent() {
    await this.openDialogWithComponentButton.first().click();
  }
  async closeDialogWithComponent() {
    await this.dialogWithComponentButton.click();
  }
}
