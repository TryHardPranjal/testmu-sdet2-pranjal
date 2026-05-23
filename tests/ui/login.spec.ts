import loginData from "../../test-data/loginData.json";
import { test, expect } from "../../fixtures/customFixtures";
import { Logger }
from "../../utils/Logger";
import { ENV } from "../../config/env";

test.describe("Login Feature", () => {
  loginData.forEach((data) => {
    test(
      data.testName,

      async ({ loginPage, dashboardPage }) => {
        const user =
          data.userType === "valid" ? ENV.users.valid : ENV.users.invalid;

        await loginPage.openLoginPage();

        await loginPage.login(user.username, user.password);

        if (data.userType === "valid") {
          await dashboardPage.verifyDashboardLoaded();
        } else {
          const error = await loginPage.getErrorMessage();

          expect(error).toContain("Username and password do not match");
        }
      },
    );
  });
});
