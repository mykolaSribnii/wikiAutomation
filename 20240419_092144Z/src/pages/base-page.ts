import { Page } from '@playwright/test';

export abstract class BasePage {
    public constructor(protected readonly page: Page) {}

    public async navigate() {
        this.page.goto('https://www.aura.com', { waitUntil: 'load' });
    }
}
