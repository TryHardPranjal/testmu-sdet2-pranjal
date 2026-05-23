import { Locator, Page } from '@playwright/test';

import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {

    private inventoryTitle: Locator;

    private backpackButton: Locator;

    private cartBadge: Locator;

    constructor(page: Page) {

        super(page);

        this.inventoryTitle = page.locator(
            '.title'
        );

        this.backpackButton = page.locator(
            '[data-test="add-to-cart-sauce-labs-backpack"]'
        );

        this.cartBadge = page.locator(
            '.shopping_cart_badge'
        );
    }

    async verifyDashboardLoaded(): Promise<void> {

        await this.waitForElement(
            this.inventoryTitle
        );

    }

    async addBackpackToCart(): Promise<void> {

        await this.click(
            this.backpackButton
        );

    }

    async getCartCount(): Promise<string> {

        return await this.getText(
            this.cartBadge
        );

    }

}