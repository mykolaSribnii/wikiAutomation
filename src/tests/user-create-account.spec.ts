import { expect } from '@playwright/test';
import { test } from '../fixtures/pages';

test.describe('User create account functional tests', () => {
    test.beforeEach(async ({ wiki }) => {
        wiki.navigate();
    });

    // Just a note why we didn't made the case for the full create account scenario:

    // 1). It has a captcha, so there's hard to login via automated tools, sorry for that :3

    // 2). Instead we can take a look on the requests, and make sure that at least the main one is loaded correctly

    // 3). Skip the negative cases, just to avoid making this suite bigger ( I can live code it later if needed xD)

    test(`When user opens the main page & select create account, the page should load correctly`, async ({
        wiki,
        page,
    }) => {
        // main request with the page content
        const phpHtmlRequestPromise = page.waitForResponse(response =>
            response.url().includes('index.php'),
        );

        // here we're using the skipLoad option on navigation , to allow the listener above catch the request
        await test.step('Click on the create account from the header', async () => {
            await wiki.header.moveTo({ tab: 'Create account', skipTabLoad: true });
        });

        await test.step('Check that phpHtml response status is 200', async () => {
            const mainIndexHtmlRequest = await phpHtmlRequestPromise;
            expect(mainIndexHtmlRequest.status()).toEqual(200);
        });

        await test.step('Page URL should include the main subUrl keyword', async () => {
            expect.soft(page.url()).toContain('CreateAccount');
        });
    });
});
