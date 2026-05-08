import { expect } from '@playwright/test';

export async function validateStatus(response, expectedStatus: number) {
  expect(response.status()).toBe(expectedStatus);
}

export async function validateJson(response) {
  const body = await response.json();
  expect(body).toBeTruthy();
  return body;
}