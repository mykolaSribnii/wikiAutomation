import { expect } from '@playwright/test';
import { test } from '../fixtures/pages';
import { sidebarPagesScenarios } from '../data/sidebar-data';

test.describe('Sidebar functional tests', () => {
    for (const testData of sidebarPagesScenarios) {
        test(`When user opens the sidebar and choose ${testData.pageName} page , related redirect should happen`, async ({
            wiki,
            page,
        }) => {
            await wiki.navigate();
            await wiki.header.openPageFromSidebarMenu({ tabName: testData.pageTextId });
            expect(page.url()).toContain(testData.subUrl);
        });
    }
});
