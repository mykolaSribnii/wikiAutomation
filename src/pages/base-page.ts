import { Page } from '@playwright/test';

export abstract class BasePage {
    public constructor(protected readonly page: Page) {}

    public async navigate() {
        this.page.goto('https://en.wikipedia.org/', { waitUntil: 'load' });
    }

    public async getItemText(props: { selector: string }) {
        return await this.page.locator(props.selector).textContent();
    }
}
