import { Page } from '@playwright/test';

const sidebarIcon = '[id="vector-main-menu-dropdown"]';
const searchField = '[name="search"]';

export class Header {
    public constructor(protected readonly page: Page) {}

    public async openPageFromSidebarMenu(props: { tabName: string }) {
        await this.page.locator(sidebarIcon).click();
        await this.page.getByText(props.tabName).first().click();
        await this.page.waitForLoadState();
    }

    public async search(props: { searchKey: string }) {
        const searchButton = this.page.getByRole('button', { name: 'Search', exact: true });

        await this.page.locator(searchField).first().waitFor();
        await this.page.locator(searchField).first().fill(props.searchKey);
        await searchButton.click();
        await this.page.waitForLoadState();
    }

    public async moveTo(props: {
        tab: 'Create account' | 'Log in' | 'View source' | 'View history' | 'Talk';
        skipTabLoad?: boolean;
    }) {
        const tabLink = this.page.getByRole('link', { name: props.tab, exact: true }).first();

        await tabLink.click();

        if (!props.skipTabLoad) {
            await this.page.waitForLoadState();
        }
    }
}
