import { Page, Locator } from "@playwright/test";

export class ToasterPage {
  readonly page: Page;
  readonly positionDropDown: Locator;
  readonly dropDownBottomLeft: Locator;
  readonly titleinput: Locator;
  readonly contentInput: Locator;
  readonly timeSelector: Locator;
  readonly showToastButton: Locator;
  readonly toasterContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.positionDropDown = page
      .locator(".form-group")
      .filter({ hasText: "Position:" })
      .locator("nb-select");
    //   this.positionDropDown = page.getByText("Position:", { exact: true });
    this.dropDownBottomLeft = page.locator("nb-option", {
      hasText: "bottom-left",
    });
    this.titleinput = page.getByText("title");
    this.contentInput = page.getByText("Content:");
    this.timeSelector = page.getByText(
      "Time to hide toast, ms. 0 to persistent toast:",
    );
    this.showToastButton = page.getByRole("button", {
      name: "Show toast",
      exact: true,
    });
    this.toasterContainer = page.locator("nb-toastr-container");
  }

  async selectBottomLeftItem(
    position: string,
    title: string,
    content: string,
    time: number,
  ) {
    await this.positionDropDown.click();
    await this.dropDownBottomLeft.click();
    //  await this.titleinput.fill("title");
    //  await this.contentInput.fill("content");
    //  await this.timeSelector.fill("number");
    await this.showToastButton.click();
  }
}
