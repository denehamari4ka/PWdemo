import { test, expect } from "./fixtures";
import { DatepickerPage } from "../page-objects/datepicker";

test("Select Datepicker data", async ({ page, navigation }) => {
  const datepickerPage = new DatepickerPage(page);

  await navigation.navigationToDatapickerPage();
  await datepickerPage.commonDatePickerSelect();

  await expect(datepickerPage.commonDatepickerInput).toHaveValue("Nov 2, 2026");
});

test("Select Range Datapicker Data", async ({ page, navigation }) => {
  const datapickerPage = new DatepickerPage(page);

  await navigation.navigationToDatapickerPage();
  await datapickerPage.rangeDatePickerSelect();

  await expect(datapickerPage.rangeDatePickerInput).toHaveValue(
    "Nov 1, 2026 - Nov 30, 2026",
  );
});

test("Select Min Max Datepicker Data", async ({ page, navigation }) => {
  const datapickerPage = new DatepickerPage(page);

  await navigation.navigationToDatapickerPage();
  await datapickerPage.minMaxDatePickerSelect();

  await expect(datapickerPage.minMaxDatePickerInput).toHaveValue(
    "Nov 20, 2026",
  );
});

test("Can not Select Disabled value", async ({ page, navigation }) => {
  const datapickerPage = new DatepickerPage(page);

  await navigation.navigationToDatapickerPage();

  await datapickerPage.minMaxDatePickerDisabledSelect();

  const initialValue = await datapickerPage.minMaxDatePickerInput.inputValue();
  await datapickerPage.minMaxDatePickerDisabledValue.click({ force: true });
  await expect(datapickerPage.minMaxDatePickerInput).toHaveValue(initialValue);
});
