import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
});

test("first test", async ({ page }) => {
  await page.getByText("Forms").click();
});
test("second test", async ({ page }) => {
  await page.getByText("Extra Components").click();
});

test("thirt test", async ({ page }) => {
  await page.getByText("Auth").click();
});
