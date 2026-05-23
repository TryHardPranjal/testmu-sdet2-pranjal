import { APIRequestContext, APIResponse } from "@playwright/test";

export class BaseAPI {
  protected request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // Generic GET request
  async get(endpoint: string): Promise<APIResponse> {
    return await this.request.get(endpoint);
  }

  // Generic POST request
  async post(endpoint: string, payload: object): Promise<APIResponse> {
    return await this.request.post(endpoint, {
      data: payload,
    });
  }

  // Generic PUT request
  async put(endpoint: string, payload: object): Promise<APIResponse> {
    return await this.request.put(endpoint, {
      data: payload,
    });
  }

  // Generic DELETE request
  async delete(endpoint: string): Promise<APIResponse> {
    return await this.request.delete(endpoint);
  }
}
