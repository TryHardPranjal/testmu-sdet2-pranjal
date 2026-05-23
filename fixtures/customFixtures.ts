import { test as base } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

import { Logger } from "../utils/Logger";

type MyFixtures = {
  loginPage: LoginPage;

  dashboardPage: DashboardPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async (
    { page },

    use,
  ) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async (
    { page },

    use,
  ) => {
    await use(new DashboardPage(page));
  },
});

// Test lifecycle logs

test.beforeEach(async ({}, testInfo) => {
  Logger.info(
    `[${testInfo.title}]
            Starting execution`,
  );
});

test.afterEach(async ({}, testInfo) => {
  Logger.info(
    `[${testInfo.title}]
            Finished execution
            Status: ${testInfo.status}`,
  );
});

export { expect } from "@playwright/test";
