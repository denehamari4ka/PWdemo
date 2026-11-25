import { test, expect } from "./fixtures";
import { TablePage } from "../page-objects/table";

test("Edit email in first row", async ({ page, navigation }) => {
  const tablePage = new TablePage(page);
  await navigation.navigationToTablesPage();

  await tablePage.editFirstRow("test@test.com");
  await expect(tablePage.emailComponent).toHaveText("test@test.com");
});
