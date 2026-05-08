import { APIRequestContext } from '@playwright/test';

export class UsersAPI {
  constructor(private apiContext: APIRequestContext) {}

  async getAllUsers() {
    return await this.apiContext.get('/users');
  }

  async getUserById(id: number) {
    return await this.apiContext.get(`/users/${id}`);
  }
}





