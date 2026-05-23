import { Locator } from '@playwright/test';

export class WaitHelper {

    static async waitForVisible(
        locator: Locator
    ): Promise<void> {

        await locator.waitFor({

            state:'visible'

        });

    }

}