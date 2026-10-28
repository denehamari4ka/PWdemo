import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/page-objects/loginPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
});

test("Navaigate to Login Page", async ({ page }) => {
  const navigateToAuth = new LoginPage(page);
  await navigateToAuth.formAuthPage();

  await expect(page).toHaveURL(
    "https://playground.bondaracademy.com/auth/login",
  );
});

test("Login with valid data", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.formAuthPage();
  await loginPage.Login("test@test.com", "test123");

  await expect(page).toHaveURL(
    "https://playground.bondaracademy.com/pages/iot-dashboard",
  );
});
