import { test, expect } from "@playwright/test";
import { RegisterPage } from "../page-objects/page-objects/registerPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
});

test("Navaigate to Register Page", async ({ page }) => {
  const navigateToAuth = new RegisterPage(page);
  await navigateToAuth.formAuthPage();

  await expect(page).toHaveURL(
    "https://playground.bondaracademy.com/auth/register",
  );
});

test("Register with valid data", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.formAuthPage();
  await registerPage.Register(
    "Mariia",
    "test@test.com",
    "test123",
    "test123",
    true,
  );
});
