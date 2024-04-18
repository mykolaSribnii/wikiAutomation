import { expect } from '@playwright/test';
import { test } from '../fixtures/pages';

test('click on pricing', async ({ mainPage, page }) => {
    await mainPage.navigate();
    await mainPage.headerPage.chooseTab({ tabName: 'Pricing', action: 'click' });
});
