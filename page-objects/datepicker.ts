import { Page, Locator } from "@playwright/test";

export class DatepickerPage {
  readonly page: Page;
  readonly commonDatepickerInput: Locator;
  readonly commonDatepickerValue: Locator;
  readonly rangeDatePickerInput: Locator;
  readonly rangeDatePickerValue1: Locator;
  readonly rangeDatePickerValue2: Locator;
  readonly minMaxDatePickerInput: Locator;
  readonly minMaxDatePickerValue: Locator;
  readonly minMaxDatePickerDisabledValue: Locator;

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
    this.minMaxDatePickerInput = page.getByPlaceholder("Min Max Picker");
    this.minMaxDatePickerValue = page
      .locator(".day-cell:not(.disabled)")
      .getByText("20", { exact: true });
    this.minMaxDatePickerDisabledValue = page
      .locator("nb-calendar-day-cell.disabled")
      .getByText("5", { exact: true })
      .first();
  }

  async commonDatePickerSelect() {
    await this.commonDatepickerInput.click();
    await this.commonDatepickerValue.click();
  }

  async rangeDatePickerSelect() {
    await this.rangeDatePickerInput.click();
    await this.rangeDatePickerValue1.click();
    await this.rangeDatePickerValue2.click();
  }

  async minMaxDatePickerSelect() {
    await this.minMaxDatePickerInput.click();
    await this.minMaxDatePickerValue.click();
  }

  async minMaxDatePickerDisabledSelect() {
    await this.minMaxDatePickerInput.click();
    await this.minMaxDatePickerDisabledValue.click();
  }
}
