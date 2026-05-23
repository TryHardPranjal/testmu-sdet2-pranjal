import { test, expect } from "../../fixtures/apiFixture";

test("Verify invalid user returns 404", async ({ userAPI }) => {
  const response = await userAPI.getUser(99999);

  expect(response.status()).toBe(404);
});
