import LoginPage from '../pageobjects/login.page';

describe('Locked out path testing', () => {
    beforeAll('Open browser', ()=> {
        browser.url('https://www.saucedemo.com/');
    });

    it('Empty password should display error', async () => {
        await LoginPage.login('locked_out_user','' );
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required');
    });

    it('Bot image should be displayed', async () => {
        await expect(LoginPage.robotImg).toBeDisplayed();
    });

    it('Logo image should be displayed', async () => {
        await expect(LoginPage.logoImg).toBeDisplayed();
    });

    it('Page should be refreshed', async () => {
        await browser.refresh();
        await browser.pause(800);
    });

    it('Locked out user should display error', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

    it('Page should be refreshed', async () => {
        await browser.refresh();
        await browser.pause(800);
    });

    it('Empty username should display error', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
    });

    it('Invalid username should display error', async () => {
        await LoginPage.login('invalid', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Invalid password should display error', async () => {
        await LoginPage.login('locked_out_user', 'invalid');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
});
