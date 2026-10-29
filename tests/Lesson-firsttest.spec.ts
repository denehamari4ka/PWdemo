import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
  await page.getByText("Auth").click();
  await page.getByText("Login").click();
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

test("register", async ({ page }) => {
  await page.pause();
  await page.locator("[class='text-link']").click();
});

test("register1", async ({ page }) => {
  await page.getByRole("link", { name: "Register" }).click();
});

test("register2", async ({ page }) => {
  await page.getByText("register").click();
});
