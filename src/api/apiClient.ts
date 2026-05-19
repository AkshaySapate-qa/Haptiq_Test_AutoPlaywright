import { request, APIRequestContext } from '@playwright/test';
import { ENV } from '../../config/env'; 

export async function createAPIContext(): Promise<APIRequestContext> {
    return await request.newContext({
        baseURL: ENV.baseURL, 
        extraHTTPHeaders: {
            Accept: 'application/json',
        },
    });
}