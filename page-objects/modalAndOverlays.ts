import { Page, Locator } from "@playwright/test";

export class ModalAndOverlaysPage {
  readonly page: Page;
  readonly openDialogWithComponentButton: Locator;
  readonly dialogWithComponent: Locator;
  readonly dialogWithComponentTitle: Locator;
  readonly dialogWithComponentButton: Locator;
  readonly openWithDelay3ComponentButton: Locator;
  readonly dialogWithDelay3Component: Locator;
  readonly dialogWithDelay3ComponentTitle: Locator;
  readonly dialogWithDelay3ComponentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.openDialogWithComponentButton = page.getByRole("button", {
      name: "Open Dialog with component",
    });
    this.dialogWithComponent = page.locator("nb-dialog-container").first();
    this.dialogWithComponentButton = page.getByRole("button", {
      name: "Dismiss Dialog",
    });
    this.dialogWithComponentTitle = page.getByText(
      "This is a title passed to the dialog component",
    );
    this.openWithDelay3ComponentButton = page.getByRole("button", {
      name: "Open with delay 3 seconds",
    });
    this.dialogWithDelay3Component = page.locator("nb-dialog-container");
    this.dialogWithDelay3ComponentTitle = page.getByText("Friendly reminder");
    this.dialogWithDelay3ComponentButton = page.getByRole("button", {
      name: "OK",
    });
  }

  async openDialogWithComponent() {
    await this.openDialogWithComponentButton.first().click();
  }
  async closeDialogWithComponent() {
    await this.dialogWithComponentButton.click();
  }

  async opendialogWithDelay3Vomponent() {
    await this.openWithDelay3ComponentButton.click();
  }
  async closedialogWithDelay3Vomponent() {
    await this.dialogWithDelay3ComponentButton.click();
  }
}
