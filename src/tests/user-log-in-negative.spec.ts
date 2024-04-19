import { expect } from '@playwright/test';
import { test } from '../fixtures/pages';

test.describe('User login functional tests', () => {
    test.beforeEach(async ({ wiki }) => {
        wiki.navigate();
    });

    test(`When user opens the main page & select Log in, the page should load correctly`, async ({
        wiki,
        page,
    }) => {
        await test.step('Click on the Log in from the header', async () => {
            await wiki.header.moveTo({ tab: 'Log in' });
        });

        await test.step('Page URL should include the main subUrl keyword', async () => {
            expect.soft(page.url()).toContain('UserLogin');
        });
    });

    // Here , because we have no acc on WIKI, it's time to make the negative test

    test(`When user is on the login page, input wrong credentials & press login , error should appear`, async ({
        wiki,
    }) => {
        await test.step('Click on the Log in from the header', async () => {
            await wiki.header.moveTo({ tab: 'Log in' });
        });

        await test.step('Fill the login form with the wrong creds', async () => {
            await wiki.login.complete({
                username: 'John',
                password: 'Silver',
                keepLoggedIn: true,
            });
        });

        await test.step('Error modal shoul appear', async () => {
            const errorModalId = '[class*="cdx-message--error"] [class="cdx-message__content"]';
            const errorModalText = await wiki.login.getItemText({ selector: errorModalId });

            expect(errorModalText).toContain('Incorrect username or password entered');
        });
    });
});
