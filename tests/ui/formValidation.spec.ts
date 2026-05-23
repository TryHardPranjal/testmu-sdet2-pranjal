import { test, expect } from "../../fixtures/customFixtures";

test("Verify login validation for empty fields", async ({ loginPage }) => {
  await loginPage.openLoginPage();

  await loginPage.clickLogin();

  expect(await loginPage.getErrorMessage()).toContain("Username is required");
});
