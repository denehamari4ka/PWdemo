import { Page, Locator } from "@playwright/test";

export class DatepickerPage {
  readonly page: Page;
  readonly commonDatepickerInput: Locator;
  readonly commonDatepickerValue: Locator;
  readonly rangeDatePickerInput: Locator;
  readonly rangeDatePickerValue1: Locator;
  readonly rangeDatePickerValue2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commonDatepickerInput = page.getByPlaceholder("Form Picker");
    this.commonDatepickerValue = page
      .locator(".day-cell:not(.bounding-month)")
      .getByText("2", { exact: true });
    this.rangeDatePickerInput = page.getByPlaceholder("Range Picker");
    this.rangeDatePickerValue1 = page
      .locator("nb-calendar-range-day-cell")
      .getByText("1", { exact: true })
      .first();
    this.rangeDatePickerValue2 = page
      .locator("nb-calendar-range-day-cell")
      .getByText("30", { exact: true })
      .first();
  }

  async commonDatepickerSelect() {
    await this.commonDatepickerInput.click();
    await this.commonDatepickerValue.click();
  }

  async rangePickerSelect() {
    await this.rangeDatePickerInput.click();
    await this.rangeDatePickerValue1.click();
    await this.rangeDatePickerValue2.click();
  }
}
