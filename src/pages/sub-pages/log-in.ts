import { Page } from '@playwright/test';
import { BasePage } from '../base-page';

const usernameField = '[autocomplete="username"]';
const passwordField = '[autocomplete="current-password"]';
const keepLoggedCheckbox = '[id="wpRemember"]';
const loginBtn = '[id="wpLoginAttempt"]';
const captcha = '[id="mw-input-captchaWord"]';

export class Login {
    public constructor(protected readonly page: Page) {}

    public async complete(props: { username: string; password: string; keepLoggedIn?: boolean }) {
        await this.page.locator(usernameField).waitFor();
        await this.page.locator(usernameField).fill(props.username);
        await this.page.locator(passwordField).waitFor();
        await this.page.locator(passwordField).fill(props.password);

        if (props.keepLoggedIn) {
            await this.page.locator(keepLoggedCheckbox).click();
        }

        await this.page.locator(loginBtn).click();

        const isCaptchaVisible = await this.page.locator(captcha).isVisible();

        if (isCaptchaVisible) {
            console.log('Captcha is visible! Retrying the login..');
            await this.page.locator(captcha).fill('12334sfsfs');
            await this.page.locator(loginBtn).click();
        }
    }

    public async getItemText(props: { selector: string }) {
        return await this.page.locator(props.selector).textContent();
    }
}
