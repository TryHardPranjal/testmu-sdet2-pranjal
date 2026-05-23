import { Page, Locator } from "@playwright/test";

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to page URL
  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  // Click reusable action
  async click(element: Locator): Promise<void> {
    await element.click();
  }

  // Type reusable action
  async fill(element: Locator, text: string): Promise<void> {
    await element.fill(text);
  }

  // Get visible text
  async getText(element: Locator): Promise<string> {
    return (await element.textContent()) || "";
  }

  // Wait for element visibility
  async waitForElement(element: Locator): Promise<void> {
    await element.waitFor({
      state: "visible",
    });
  }
}
