import { APIRequestContext, APIResponse } from "@playwright/test";

export class AuthAPI {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // Mock auth response for framework auth flow validation
  public async login(): Promise<APIResponse> {
    return await this.request.fetch("https://httpbin.org/post", {
      method: "POST",

      data: {
        username: "testuser",
        password: "password123",
      },
    });
  }
}
