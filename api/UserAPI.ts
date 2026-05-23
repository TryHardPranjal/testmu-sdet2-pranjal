import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseAPI } from "./BaseAPI";

export class UserAPI extends BaseAPI {
  constructor(request: APIRequestContext) {
    super(request);
  }

  public async getUser(id: number): Promise<APIResponse> {
    return await this.get(`/users/${id}`);
  }

  public async createUser(payload: object): Promise<APIResponse> {
    return await this.post("/users", payload);
  }

  public async updateUser(id: number, payload: object): Promise<APIResponse> {
    return await this.put(`/users/${id}`, payload);
  }

  public async deleteUser(id: number): Promise<APIResponse> {
    return await this.delete(`/users/${id}`);
  }
}
