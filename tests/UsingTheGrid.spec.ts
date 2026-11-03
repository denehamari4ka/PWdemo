import { test, expect } from "./fixtures";
import { UsingTheGrid } from "../page-objects/formLayouts";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com");
});
