import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("Locators:CSS", async ({ page }) => {
  //find by Tag
  page.locator("input");
  //find by Id
  page.locator("&inputEmail1");
  //find by Class value
  page.locator(".shape-rectangle");
  //find by attributes
  page.locator("[placeholder='Email']");
  //find by full calss value
  page.locator(
    "[class='input-full-width size-medium status-basic shape-rectangle nb-transition']",
  );
  //find by several selectors
  page.locator("input[placeholder='Email'].shape-rectangle");
  //find by partial Text match
  page.locator(':text("Using")');
  //find by exact Text match
  page.locator(':text-is("Using the Grid")');
});

test("Locators:user", async ({ page }) => {
  await page.getByRole("button", { name: "Sign in" }).first().click();
  await page
    .getByRole("textbox", { name: "Email" })
    .first()
    .fill("test@test.com");
  await page.getByLabel("Email").first().fill("test@test.com");
  await page.getByPlaceholder("Jane Doe").fill("Mariia Deneha");
  await page.getByTestId("inputEmail1").fill("test@test.com");
  await page.getByTitle("IoT Dashboard").click();
});
