import { test, expect } from "./fixtures";
import { DatepickerPage } from "../page-objects/datepicker";

test("Select Datepicker data", async ({ page, navigation }) => {
  const datepickerPage = new DatepickerPage(page);

  await navigation.navigationToDatapickerPage();
  await datepickerPage.datepickerSelect();

  await expect(datepickerPage.commonDatepickerInput).toHaveValue("Nov 2, 2026");
});
