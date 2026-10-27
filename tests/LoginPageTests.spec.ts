import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/page-objects/loginPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
});

test("Novaigate to Login Page", async ({ page }) => {
  const navigateToAuth = new LoginPage(page);
  await navigateToAuth.formAuthPage();
});
