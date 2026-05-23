import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({

  // Folder containing all test files
  testDir: './tests',

  // Run test files in parallel
  fullyParallel: true,

  // Fail build if test.only accidentally committed
  forbidOnly: !!process.env.CI,

  // Retry failed tests
  retries: process.env.CI ? 2 : 1,

  // Workers for parallel execution
  workers: process.env.CI ? 2 : undefined,

  // Reporters
  reporter: [

    ['html'],
    ['allure-playwright']

  ],

  use: {

    // Base URL from environment variable
    baseURL: process.env.BASE_URL,

    // Capture screenshot on failure
    screenshot: 'only-on-failure',

    // Save video for failed tests
    video: 'retain-on-failure',

    // Save trace for debugging
    trace: 'on-first-retry',

    // Default action timeout
    actionTimeout: 10000,

    // Default page load timeout
    navigationTimeout: 30000
  },

  projects: [

    {
      name: 'Chrome',

      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'Firefox',

      use: {
        ...devices['Desktop Firefox']
      }
    }

  ]

});