import { test as base } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage";

type MyFixtures = {
  navigation: NavigationPage;
};

export const test = base.extend<MyFixtures>({
  navigation: async ({ page }, use) => {
    await page.goto("https://playground.bondaracademy.com");
    await use(new NavigationPage(page));
  },
});

export { expect } from "@playwright/test";
