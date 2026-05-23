import { Locator, expect } from '@playwright/test';

export class AssertionHelper {

    static async verifyVisible(
        locator: Locator
    ): Promise<void> {

        await expect(locator)
        .toBeVisible();

    }

    static async verifyText(

        locator: Locator,
        expectedText: string

    ): Promise<void> {

        await expect(locator)
        .toHaveText(expectedText);

    }

}