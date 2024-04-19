import { expect } from '@playwright/test';
import { test } from '../fixtures/pages';

const articleMainTitle = '[id="firstHeading"]';

test.describe('Search functional tests', () => {
    test(`When user opens the main page & using search, it should show valid results`, async ({
        wiki,
        page,
    }) => {
        await wiki.navigate();
        await wiki.header.search({ searchKey: 'Lego' });

        expect.soft(page.url()).toContain('wiki/Lego');

        const articleMainTitleText = await wiki.getItemText({ selector: articleMainTitle });

        expect(articleMainTitleText).toEqual('Lego');
    });
});
