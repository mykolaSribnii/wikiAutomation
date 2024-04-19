import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testMatch: '**.spec.ts',
    fullyParallel: true,
    timeout: 60000,
    forbidOnly: !!process.env.CI,
    workers: process.env.CI ? 1 : undefined,
    reporter: [['html', { open: 'never' }]],
    use: {
        trace: 'on-first-retry',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        {
            name: 'firexox',
            use: { ...devices['Desktop Firefox'] },
        },
    ],
});
