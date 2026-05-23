import { test, expect } from "../../fixtures/apiFixture";

import apiData from "../../test-data/apiData.json";

test.describe("User CRUD API", () => {
  test("Verify create user", async ({ userAPI }) => {
    const response = await userAPI.createUser(apiData.newUser);

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe(apiData.newUser.name);
  });

  test("Verify get user", async ({ userAPI }) => {
    const response = await userAPI.getUser(1);

    expect(response.status()).toBe(200);
  });

  test("Verify update user", async ({ userAPI }) => {
    const response = await userAPI.updateUser(1, apiData.updatedUser);

    expect(response.status()).toBe(200);
  });

  test("Verify delete user", async ({ userAPI }) => {
    const response = await userAPI.deleteUser(1);

    expect(response.status()).toBe(200);
  });
});
