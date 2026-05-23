import { test, expect } from "../../fixtures/apiFixture";

test.describe("Authentication API", () => {
  test("Verify login request succeeds", async ({ authAPI }) => {
    const response = await authAPI.login();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.json.username).toBe("testuser");
  });
});
