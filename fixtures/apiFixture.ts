import { test as base, request } from '@playwright/test';

import { AuthAPI } from '../api/AuthAPI';
import { UserAPI } from '../api/UserAPI';
import { ENV } from '../config/env';

type APIFixtures = {

    authAPI: AuthAPI;

    userAPI: UserAPI;
};

export const test = base.extend<APIFixtures>({

    authAPI: async ({}, use) => {

        // Dedicated API context
        const apiContext =
            await request.newContext({

                baseURL: ENV.apiBaseURL
            });

        await use(
            new AuthAPI(apiContext)
        );

        await apiContext.dispose();
    },

    userAPI: async ({}, use) => {

        const apiContext =
            await request.newContext({

                baseURL: ENV.apiBaseURL
            });

        await use(
            new UserAPI(apiContext)
        );

        await apiContext.dispose();
    }

});

export { expect } from '@playwright/test';