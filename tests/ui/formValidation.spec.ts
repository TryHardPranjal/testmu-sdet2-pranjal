import { test, expect } from "../../fixtures/customFixtures";

import { FormPage } from "../../pages/FormPage";

test.describe("Form Validation", () => {
  test("Verify empty login form validation", async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.openForm();

    await formPage.submitEmptyForm();

    expect(await formPage.getValidationMessage()).toContain(
      "Username is required",
    );
  });

  test("Verify password required validation", async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.openForm();

    await formPage.submitUsernameOnly("standard_user");

    expect(await formPage.getValidationMessage()).toContain(
      "Password is required",
    );
  });
});
