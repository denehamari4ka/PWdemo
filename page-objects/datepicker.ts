import { Page, Locator } from "@playwright/test";

export class DatepickerPage {
  readonly page: Page;
  readonly commonDatepickerInput: Locator;
  readonly commonDatepickerValue: Locator;
  readonly rangePickerInput: Locator;
  readonly rangePickerValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commonDatepickerInput = page.getByPlaceholder("Form Picker");
    this.commonDatepickerValue = page
      .locator(".day-cell:not(.bounding-month)")
      .getByText("2", { exact: true });
  }

  async commonDatepickerSelect() {
    await this.commonDatepickerInput.click();
    await this.commonDatepickerValue.click();
  }
}
