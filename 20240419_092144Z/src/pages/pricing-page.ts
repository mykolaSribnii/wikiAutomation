import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class PricingPage extends BasePage {
    public constructor(page: Page) {
        super(page);
    }
}
