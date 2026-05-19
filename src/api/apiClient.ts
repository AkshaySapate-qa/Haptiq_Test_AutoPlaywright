

import { request, APIRequestContext } from '@playwright/test';
import { ENV } from '../../config/env'; // Import your environment config

export async function createAPIContext(): Promise<APIRequestContext> {
    return await request.newContext({
        baseURL: ENV.baseURL, // Use the variable instead of hardcoding
        extraHTTPHeaders: {
            Accept: 'application/json',
        },
    });
}

