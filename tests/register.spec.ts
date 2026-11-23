import { test, expect } from "./fixtures";
import { RegisterPage } from "../page-objects/registerPage";
import { faker } from "@faker-js/faker";

test("Register with valid data", async ({ page, navigation }) => {
  const registerPage = new RegisterPage(page);

  await navigation.navigateToRegisterPage();
  await registerPage.Register(
    "Mariia Deneha",
    "test@test.com",
    "test123",
    "test123",
    true,
  );
  await expect(page).toHaveURL(
    "https://playground.bondaracademy.com/auth/register",
  );
});
