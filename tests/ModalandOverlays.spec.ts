import { test, expect } from "./fixtures";
import { ModalandOverlaysPage } from "../page-objects/modal&overlays";

test("Open Dialog with component", async ({ page, navigation }) => {
  const modalandOverlaysPage = new ModalandOverlaysPage(page);

  await navigation.navigationToDialogPage();
  await page.pause();
  await modalandOverlaysPage.openDialogWithComponent();

  await expect(modalandOverlaysPage.dialogWithComponent).toBeVisible();
  await expect(modalandOverlaysPage.dialogWithComponent).toContainText(
    "This is a title passed to the dialog component",
  );
  await modalandOverlaysPage.closeDialogWithComponent();
  await expect(modalandOverlaysPage.dialogWithComponent).toBeHidden();
});
