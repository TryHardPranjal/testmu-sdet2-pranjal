import { test, expect }

from '../../fixtures/customFixtures';

test.describe(
'Dashboard Tests',
()=>{

test(
'Verify product can be added to cart',

async({

loginPage,
dashboardPage

})=>{

await loginPage.openLoginPage();

await loginPage.login(

'standard_user',
'secret_sauce'

);

await dashboardPage
.verifyDashboardLoaded();

await dashboardPage
.addBackpackToCart();

expect(

await dashboardPage
.getCartCount()

).toBe('1');

});

});