import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    // Locators centralized inside page class
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.usernameInput = page.locator('[data-test="username"]');

        this.passwordInput = page.locator('[data-test="password"]');

        this.loginButton = page.locator('[data-test="login-button"]');

        this.errorMessage = page.locator('[data-test="error"]');
    }

    // Open application
    async openLoginPage(): Promise<void> {

        await this.navigate('/');
    }

    // Enter username
    async enterUsername(username: string): Promise<void> {

        await this.fill(
            this.usernameInput,
            username
        );

    }

    // Enter password
    async enterPassword(password: string): Promise<void> {

        await this.fill(
            this.passwordInput,
            password
        );

    }

    // Click login
    async clickLogin(): Promise<void> {

        await this.click(
            this.loginButton
        );

    }

    // Combined reusable login action
    async login(
        username: string,
        password: string
    ): Promise<void> {

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickLogin();

    }

    async getErrorMessage(): Promise<string> {

        return await this.getText(
            this.errorMessage
        );

    }

}