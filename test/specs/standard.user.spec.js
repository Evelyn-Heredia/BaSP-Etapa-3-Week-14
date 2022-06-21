import LoginPage from '../pageobjects/login.page';
import StandardUser from '../pageobjects/standard.user';

describe('Standard user errors',() => {
    beforeAll('Open browser', ()=> {
        browser.url('https://www.saucedemo.com/');
    });

    it('Bot image should be displayed', async () => {
        await expect(LoginPage.robotImg).toBeDisplayed();
    });

    it('Logo image should be displayed', async () => {
        await expect(LoginPage.logoImg).toBeDisplayed();
    });

    it('Empty username should display error', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
    });

    it('Page should be refreshed', async () => {
        await browser.refresh();
        await browser.pause(800);
    });

    it('Empty password should display error', async () => {
        await LoginPage.login('standard_user','' );
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required');
    });

    it('Invalid username should display error', async () => {
        await LoginPage.login('invalid', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Invalid password should display error', async () => {
        await LoginPage.login('standard_user', 'invalid');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Successful login', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Backpack image should be displayed', async () => {
        await expect(StandardUser.backpackImg).toHaveAttrContaining('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    });

    it('Bike Light image should be displayed', async () => {
        await expect(StandardUser.bikeLightImg).toHaveAttrContaining('src', '/static/media/bike-light-1200x1500.a0c9caae.jpg');
    });

    it('T-shirt image should be displayed', async () => {
        await expect(StandardUser.tShirtImg).toHaveAttrContaining('src', '/static/media/bolt-shirt-1200x1500.c0dae290.jpg');
    });

    it('Jacket image should be displayed', async () => {
        await expect(StandardUser.jacketImg).toHaveAttrContaining('src', '/static/media/sauce-pullover-1200x1500.439fc934.jpg');
    });

    it('Baby bodysuit image should be displayed', async () => {
        await expect(StandardUser.babyBodysuitImg).toHaveAttrContaining('src', '/static/media/red-onesie-1200x1500.1b15e1fa.jpg');
    });

    it('Red T-shirt image should be displayed', async () => {
        await expect(StandardUser.redTshirtImg).toHaveAttrContaining('src', '/static/media/red-tatt-1200x1500.e32b4ef9.jpg');
    });
});