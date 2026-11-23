import { test, expect } from "./fixtures";
import { LoginPage } from "../page-objects/loginPage";
import { faker } from "@faker-js/faker";

test("Login with valid data", async ({ page, navigation }) => {
  const loginPage = new LoginPage(page);

  const ramdomEmail = faker.internet.email({ provider: "test.com" });

  await navigation.navigateToLoginPage();
  await loginPage.login(ramdomEmail, "test123");

  await expect(page).toHaveURL(
    "https://playground.bondaracademy.com/pages/iot-dashboard",
  );
});

test("Click on Register link", async ({ page, navigation }) => {
  const loginPage = new LoginPage(page);

  await navigation.navigateToLoginPage();
  await loginPage.openRegisterPageFromLogin();

  await expect(page).toHaveURL(
    "https://playground.bondaracademy.com/auth/register",
  );
});

test("Login with empty data", async ({ page, navigation }) => {
  const loginPage = new LoginPage(page);
  await navigation.navigateToLoginPage();

  await expect(loginPage.loginbutton).toBeDisabled();
});

test("Email is required error message shows", async ({ page, navigation }) => {
  const loginPage = new LoginPage(page);
  await navigation.navigateToLoginPage();
  await loginPage.emailIsRequired();

  await expect(loginPage.emailIsRequiredError).toBeVisible();
  await expect(loginPage.emailIsRequiredError).toHaveText("Email is required!");
});

test("Email should be the real one", async ({ page, navigation }) => {
  const loginPage = new LoginPage(page);
  await navigation.navigateToLoginPage();
  await loginPage.emailShouldBeTheRealOne("test");

  await expect(loginPage.invalidEmail).toBeVisible();
  await expect(loginPage.invalidEmail).toHaveText(
    "Email should be the real one!",
  );
});

// Login page test cases: positiv / negativ
