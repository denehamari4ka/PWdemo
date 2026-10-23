import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
  await page.getByRole("link", { name: "Auth" }).click();
  await page.getByRole("link", { name: "Login" }).click();
});

test("Login with valid data", async ({ page }) => {
  await page
    .getByRole("textbox", { name: "Email address" })
    .fill("test@test.com");
  await page.getByRole("textbox", { name: "Password" }).fill("test123");
  await page.getByRole("button", { name: "Log in" }).click();

  await expect(page).toHaveURL(/iot-dashboard/);
});
