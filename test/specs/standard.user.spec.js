import LoginPage from '../pageobjects/login.page'

beforeAll('Open browser', ()=> {
    browser.url('https://www.saucedemo.com/')
});

describe('Login page testing',() => {
    it('Successful login', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Empty username should display error', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
    });

    it('Invalid username should display error', async () => {
        await LoginPage.login('invalid', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
/*
    it('Empty password should display error', async () => {
        await LoginPage.login('standard_user', );
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required');
    });
*/
    it('Invalid password should display error', async () => {
        await LoginPage.login('standard_user', 'invalid');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
});