import { test as base } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { PricingPage } from '../pages/pricing-page';

interface Pages {
    readonly mainPage: MainPage;
    readonly pricingPage: PricingPage;
}

export const test = base.extend<Pages>({
    async mainPage({ page }, use) {
        await use(new MainPage(page));
    },

    async pricingPage({ page }, use) {
        await use(new MainPage(page));
    },
});
