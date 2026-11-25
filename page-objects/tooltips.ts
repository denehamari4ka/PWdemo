import { Page, Locator } from "@playwright/test";

export class TooltipPage {
  readonly page: Page;
  readonly leftbutton: Locator;
  readonly leftbuttonTooltip: Locator;
  readonly onClickButton: Locator;
  readonly onClickButtonTooltip: Locator;

  constructor(page: Page) {
    this.page = page;
    this.leftbutton = page.getByRole("button", {
      name: "Left",
      exact: true,
    });
    this.leftbuttonTooltip = page.getByText("Hello, how are you today?");
    this.onClickButton = page
      .getByRole("button")
      .filter({ hasText: "on click" });
    this.onClickButtonTooltip = page
      .getByText("Hello, how are you today?")
      .first();
  }

  async hoverOverLeftButton() {
    await this.leftbutton.hover();
  }

  async moveMouseAway() {
    await this.page.mouse.move(0, 0);
  }

  async checkLeftButtonPosition() {
    await this.leftbutton.hover();

    const targetBox = await this.leftbutton.boundingBox();
    const tooltipBox = await this.leftbuttonTooltip.boundingBox();
  }

  async clickOnClickButton() {
    await this.onClickButton.click();
  }
}
