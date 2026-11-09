import { test, expect } from "./fixtures";
import { ModalAndOverlaysPage } from "../page-objects/modal&overlays";

test("Open Dialog with component", async ({ page, navigation }) => {
  const modalandOverlaysPage = new ModalAndOverlaysPage(page);

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

test("Open with delay 3 seconds", async ({ page, navigation }) => {
  const modalandOverlaysPage = new ModalAndOverlaysPage(page);

  await navigation.navigationToDialogPage();
  await modalandOverlaysPage.opendialogWithDelay3Vomponent();
  await expect(modalandOverlaysPage.dialogWithDelay3Component).toBeVisible({
    timeout: 5000,
  });
  await expect(modalandOverlaysPage.dialogWithDelay3Component).toContainText(
    "Friendly reminder",
  );
  await modalandOverlaysPage.closedialogWithDelay3Vomponent();
  await expect(modalandOverlaysPage.dialogWithDelay3Component).toBeHidden();
});

test("Not Open with delay 3 seconds", async ({ page, navigation }) => {
  const modalandOverlaysPage = new ModalAndOverlaysPage(page);

  await navigation.navigationToDialogPage();
  await modalandOverlaysPage.opendialogWithDelay3Vomponent();
  await page.waitForTimeout(1000);
  await expect(modalandOverlaysPage.dialogWithDelay3Component).toBeHidden();
});

test("Close dialog with ESC", async ({ page, navigation }) => {
  const modalandOverlaysPage = new ModalAndOverlaysPage(page);

  await navigation.navigationToDialogPage();
  await modalandOverlaysPage.openDialogWithComponent();
  await page.keyboard.press("Escape");
  await expect(modalandOverlaysPage.dialogWithComponent).toBeHidden();
});

test("Close dialog with backdrop", async ({ page, navigation }) => {
  const modalandOverlaysPage = new ModalAndOverlaysPage(page);
  const backdrop = page.locator(".cdk-overlay-backdrop");

  await navigation.navigationToDialogPage();
  await modalandOverlaysPage.openDialogWithComponent();
  await backdrop.click({ position: { x: 10, y: 10 } });
  await expect(modalandOverlaysPage.dialogWithComponent).toBeHidden();
});
