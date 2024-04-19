import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';
import { Header } from './sub-pages/header';
import { Login } from './sub-pages/log-in';

export class MainPage extends BasePage {
    readonly header: Header;
    readonly login: Login;

    public constructor(page: Page) {
        super(page);
        this.header = new Header(this.page);
        this.login = new Login(this.page);
    }
}
