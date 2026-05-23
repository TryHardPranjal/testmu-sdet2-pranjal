import { test, expect, request } from "@playwright/test";

import { ENV } from "../../config/env";

import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";

import { UserAPI } from "../../api/UserAPI";

test.describe("Framework Integration Flow", () => {
  test("Verify API layer and UI layer execution in a single workflow", async ({
    page,
  }) => {
    // Dedicated API context

    const apiContext = await request.newContext({
      baseURL: ENV.apiBaseURL,
    });

    const userAPI = new UserAPI(apiContext);

    // API validation

    const apiResponse = await userAPI.getUser(1);

    expect(apiResponse.status()).toBe(200);

    const user = await apiResponse.json();

    expect(user.name).toBeTruthy();

    // UI workflow

    const loginPage = new LoginPage(page);

    const dashboardPage = new DashboardPage(page);

    await loginPage.openLoginPage();

    await loginPage.login(ENV.users.valid.username, ENV.users.valid.password);

    await dashboardPage.verifyDashboardLoaded();

    await dashboardPage.addBackpackToCart();

    expect(await dashboardPage.getCartCount()).toBe("1");

    await apiContext.dispose();
  });
});
