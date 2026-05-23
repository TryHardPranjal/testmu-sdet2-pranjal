import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FormPage extends BasePage {

    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;

    constructor(page: Page) {

        super(page);

        // Form field locators

        this.usernameInput =
            page.locator(
                '[data-test="username"]'
            );

        this.passwordInput =
            page.locator(
                '[data-test="password"]'
            );

        this.loginButton =
            page.locator(
                '[data-test="login-button"]'
            );

        this.errorMessage =
            page.locator(
                '[data-test="error"]'
            );

    }

    // Open login page

    public async openForm(): Promise<void> {

        await this.navigate(
            "/"
        );

    }

    // Submit without entering data

    public async submitEmptyForm(): Promise<void> {

        await this.click(
            this.loginButton
        );

    }

    // Submit partial form

    public async submitUsernameOnly(
        username:string
    ): Promise<void>{

        await this.fill(
            this.usernameInput,
            username
        );

        await this.click(
            this.loginButton
        );

    }

    // Validation message

    public async getValidationMessage()
    :Promise<string>{

        return await this.getText(
            this.errorMessage
        );

    }

}