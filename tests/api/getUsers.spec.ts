
import { test, expect, APIRequestContext } from '@playwright/test';
import { createAPIContext } from '../../src/api/apiClient';
import { UsersAPI } from '../../src/api/usersApi';

let apiContext: APIRequestContext;
let usersApi: UsersAPI;
test.beforeAll(async () => {
  apiContext = await createAPIContext();
  usersApi = new UsersAPI(apiContext);
});

test.afterAll(async () => {
  await apiContext.dispose();
});

test.describe('GET Users API Tests', () => {
  test('Verify GET /users returns list of users successfully', async () => {
    const response = await apiContext.get('/users');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(Array.isArray(responseBody)).toBeTruthy();
    expect(responseBody.length).toBeGreaterThan(0);

    const firstUser = responseBody[0];

    expect(firstUser).toHaveProperty('id');
    expect(firstUser).toHaveProperty('name');
    expect(firstUser).toHaveProperty('email');

    expect(firstUser.email).toContain('@');
  });

  test('Verify GET /users/1 returns correct single user details', async () => {
    const response = await apiContext.get('/users/1');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(typeof responseBody).toBe('object');
    expect(Array.isArray(responseBody)).toBeFalsy();

    expect(responseBody.id).toBe(1);
    expect(responseBody).toHaveProperty('name');
    expect(responseBody).toHaveProperty('email');

    expect(responseBody.email).toContain('@');
  });

  test('Verify GET /users/9999 returns empty object for non-existing user', async () => {
    const response = await apiContext.get('/users/9999');

    expect(response.status()).toBe(404);
  });
});

test('Verify GET /users returns list', async () => {
  const response = await usersApi.getAllUsers();

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body)).toBeTruthy();
});

