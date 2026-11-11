import { test, expect } from "./fixtures";
import { ToasterPage } from "../page-objects/toasters";

test("Select Bottom Left tItem", async ({ page, navigation }) => {
  const toasterPage = new ToasterPage(page);

  await navigation.navigationToPageToastr();

  await toasterPage.selectBottomLeftItem("bottom-left", "Hello", "World", 3000);
  console.log(await toasterPage.positionDropDown.count());
  await expect(toasterPage.toasterContainer).toBeVisible();
  await expect(toasterPage.toasterContainer).toContainText("HI");
});
