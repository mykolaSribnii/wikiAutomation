import { test as base } from '@playwright/test';
import { MainPage } from '../pages/main-page';

interface Pages {
    readonly wiki: MainPage;
}

export const test = base.extend<Pages>({
    async wiki({ page }, use) {
        await use(new MainPage(page));
    },
});
