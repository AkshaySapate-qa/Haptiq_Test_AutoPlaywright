import { request, APIRequestContext } from '@playwright/test';

export async function createAPIContext(): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
    extraHTTPHeaders: {
      Accept: 'application/json',
    },
  });
}