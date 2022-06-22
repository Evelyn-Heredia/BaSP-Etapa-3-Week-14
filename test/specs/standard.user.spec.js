import LoginPage from '../pageobjects/login.page';
import StandardUser from '../pageobjects/standard.user';

describe('Standard user path',() => {
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

    it('Successful login redirects to products tab', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Hamburger menu should be displayed and clickable', async () => {
        await expect(StandardUser.hambMenu).toBeDisplayed();
        await expect(StandardUser.hambMenu).toBeClickable();
    });

    it('Hamburger menu should display a list', async () => {
        await StandardUser.hambMenu.click();
        await expect(StandardUser.wrapMenu).toHaveChildren(4);
    });

    it('Menu list items should be clickable', async () => {
        await expect(StandardUser.wrapMenuItems).toBeClickable();
    });

    it('Red cross should close menu', async () => {
        await expect(StandardUser.closeWrapMenu).toBeDisplayed();
        await expect(StandardUser.closeWrapMenu).toBeClickable();
        await StandardUser.closeWrapMenu.click();
        await expect(StandardUser.closeWrapMenu).not.toBeDisplayed();
    });

    it('App logo should be displayed', async () => {
        await expect(StandardUser.logoImg).toBeDisplayed();
    });

    it('Cart image should be displayed and clickable', async () => {
        await expect(StandardUser.cartImg).toBeDisplayed();
        await expect(StandardUser.cartImg).toBeClickable();
    });

    it('Page title should be displayed', async () => {
        await expect(StandardUser.pageTitle).toHaveText('PRODUCTS');
    });

    it('Bot head image should be displayed', async () => {
        await expect(StandardUser.botHeadImg).toBeDisplayed();
    });

    it('Filter should be clickable', async () => {
        await expect(StandardUser.productFilter).toBeClickable();
    });

    it('Filter should display options', async () => {
        await StandardUser.productFilter.click();
        await expect(StandardUser.productFilter).toHaveChildren(4);
    });

    it('Filter options should be clickable', async () => {
        await StandardUser.productFilter.click();
        await expect(StandardUser.productFilter).toBeClickable();
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

    it('Products price should be displayed', async () => {
        await expect(StandardUser.productsPrice).toHaveAttrContaining('class','inventory_item_price');
        await expect(StandardUser.productsPrice).toHaveTextContaining('$');
    });

    it('Add to cart button should be displayed', async () => {
        await expect(StandardUser.inventoryContainer).toHaveTextContaining('ADD TO CART');
    });

    it('A new tab should be displayed when clicking a product image', async () => {
        await StandardUser.seeProduct(StandardUser.backpackImg, 'https://www.saucedemo.com/inventory-item.html?id=4');
        await expect(StandardUser.hambMenu).toBeDisplayed;
        await StandardUser.seeProduct(StandardUser.bikeLightImg, 'https://www.saucedemo.com/inventory-item.html?id=0');
        await StandardUser.seeProduct(StandardUser.tShirtImg, 'https://www.saucedemo.com/inventory-item.html?id=1');
        await StandardUser.seeProduct(StandardUser.jacketImg, 'https://www.saucedemo.com/inventory-item.html?id=5');
        await StandardUser.seeProduct(StandardUser.babyBodysuitImg, 'https://www.saucedemo.com/inventory-item.html?id=2');
        await StandardUser.seeProduct(StandardUser.redTshirtImg, 'https://www.saucedemo.com/inventory-item.html?id=3');
    });

    it('Add to cart button should changed into remove when clicked', async () => {
        await expect(StandardUser.addBtn).toBeDisplayed();
        await StandardUser.addBtn.click();
        await expect(StandardUser.removeBtn).toBeDisplayed();
        await expect(StandardUser.removeBtn).toHaveText('REMOVE');
    });

    it('Remove button should changed into add to cart when clicked', async () => {
        await expect(StandardUser.removeBtn).toBeDisplayed();
        await StandardUser.removeBtn.click();
        await expect(StandardUser.addBtn).toBeDisplayed();
        await expect(StandardUser.addBtn).toHaveText('ADD TO CART');
    });

    it('Footer should be displayed', async () => {
        await expect(StandardUser.productsFooter).toBeDisplayed();
    });

    it('Social media icons should be displayed and clickable', async () => {
        await StandardUser.socialMediaIcons(StandardUser.twitterImg);
        await StandardUser.socialMediaIcons(StandardUser.facebookImg);
        await StandardUser.socialMediaIcons(StandardUser.linkedinImg);

    });

    it('Footer copyright should be displayed', async () => {
        await expect(StandardUser.footerCopyright).toBeDisplayed();
        await expect(StandardUser.footerCopyright).toHaveText('© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });

    it('Footer bot image should be displayed', async () => {
        await expect(StandardUser.footerBotImg).toBeDisplayed();
    });
});