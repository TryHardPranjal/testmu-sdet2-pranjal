import loginData from '../../test-data/loginData.json';

import { test, expect } from '../../fixtures/customFixtures';

import { ENV } from '../../config/env';

test.describe('Login Feature',()=>{

    test(
        'Verify successful login',
        async({

            loginPage,
            dashboardPage

        })=>{

            await loginPage.openLoginPage();

            await loginPage.login(

                ENV.users.valid.username,
                ENV.users.valid.password

            );

            await dashboardPage
            .verifyDashboardLoaded();

        }
    );

    test(
        'Verify invalid login validation',
        async({

            loginPage

        })=>{

            await loginPage.openLoginPage();

            await loginPage.login(

                ENV.users.invalid.username,
                ENV.users.invalid.password

            );

            await expect(

                await loginPage
                .getErrorMessage()

            ).toContain(
                'Username and password do not match'
            );

        }
    );

});