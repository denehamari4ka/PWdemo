import { test, expect } from "./fixtures";
import { DatepickerPage } from "../page-objects/datepicker";

test("Select Datepicker data", async ({ page, navigation }) => {
  const datepickerPage = new DatepickerPage(page);

  await navigation.navigationToDatapickerPage();
  await datepickerPage.commonDatepickerSelect();

  await expect(datepickerPage.commonDatepickerInput).toHaveValue("Nov 2, 2026");
});

test("Select Range Datapicker Data", async ({ page, navigation }) => {
  const datapickerPage = new DatepickerPage(page);

  await navigation.navigationToDatapickerPage();
  await datapickerPage.rangePickerSelect();

  await expect(datapickerPage.rangeDatePickerInput).toHaveValue(
    "Nov 1, 2026 - Nov 30, 2026",
  );
});
