import { expect, APIResponse } from '@playwright/test';

export async function validateStatus(response: APIResponse, expectedStatus: number) {
  expect(response.status()).toBe(expectedStatus);
}

export async function validateJson(response: APIResponse) {
    const body = await response.json();
    expect(body).toBeTruthy();
    return body;
}

