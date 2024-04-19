import { Page } from '@playwright/test';
import { BasePage } from './base-page';
import { Header } from './sub-pages/header';

export class MainPage extends BasePage {
    readonly headerPage: Header;

    public constructor(page: Page) {
        super(page);
        this.headerPage = new Header(this.page);
    }
}
