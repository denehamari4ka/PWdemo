import { test, expect } from "@playwright/test";
import { UsingTheGrid } from "../page-objects/page-objects/formLayouts";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
});

test("Naviagte to From Layouts Page", async ({ page }) => {
  const navigateToFormLayauts = new UsingTheGrid(page);
  await navigateToFormLayauts.formLayoutsPage();
});
