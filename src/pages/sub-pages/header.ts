import { Page } from '@playwright/test';

export class Header {
    public constructor(protected readonly page: Page) {}

    public async chooseTab(props: {
        tabName:
            | 'Pricing'
            | 'Features'
            | 'Resources'
            | 'How Aura Works'
            | 'Sign in'
            | 'Help'
            | 'Start Free Trial';
        action: 'click' | 'hover';
    }) {
        const textLocator = this.page.getByRole('link', { name: props.tabName });
        props.action === 'click' ? await textLocator.click() : await textLocator.hover();
    }
}
