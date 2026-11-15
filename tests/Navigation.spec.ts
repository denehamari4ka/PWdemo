import { test, expect } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage";

let navigation: NavigationPage;

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
  navigation = new NavigationPage(page);
});

test("Navigate to Login Page", async ({ page }) => {
  await navigation.navigateToLoginPage();

  await expect(page).toHaveURL(
    "https://playground.bondaracademy.com/auth/login",
  );
});

test("Navaigate to Register Page", async ({ page }) => {
  await navigation.navigateToRegisterPage();

  await expect(page).toHaveURL(
    "https://playground.bondaracademy.com/auth/register",
  );
});

test("Naviagte to From Layouts Page", async ({ page }) => {
  await navigation.navigateToFormLayoutsPage();
  await expect(page).toHaveURL(
    "https://playground.bondaracademy.com/pages/forms/layouts",
  );
});

test("Navigate to Tables Page", async ({ page }) => {
  await navigation.navigationToTablesPage();
  await expect(page).toHaveURL(
    "https://playground.bondaracademy.com/pages/tables/smart-table",
  );
});
