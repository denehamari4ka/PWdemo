import { test, expect } from "./fixtures";
import { LoginPage } from "../page-objects/loginPage";

test("Login with valid data", async ({ page, navigation }) => {
  const loginPage = new LoginPage(page);

  await navigation.navigateToLoginPage();
  await loginPage.Login("test@test.com", "test123");

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
