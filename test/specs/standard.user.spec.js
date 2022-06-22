import LoginPage from '../pageobjects/login.page';
import ProductsPage from '../pageobjects/su.products.page';

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
        await expect(ProductsPage.hambMenu).toBeDisplayed();
        await expect(ProductsPage.hambMenu).toBeClickable();
    });

    it('Hamburger menu should display a list', async () => {
        await ProductsPage.hambMenu.click();
        await expect(ProductsPage.wrapMenu).toHaveChildren(4);
    });

    it('Menu list items should be clickable', async () => {
        await expect(ProductsPage.wrapMenuItems).toBeClickable();
    });

    it('Red cross should close menu', async () => {
        await expect(ProductsPage.closeWrapMenu).toBeDisplayed();
        await expect(ProductsPage.closeWrapMenu).toBeClickable();
        await ProductsPage.closeWrapMenu.click();
        await expect(ProductsPage.closeWrapMenu).not.toBeDisplayed();
    });

    it('App logo should be displayed', async () => {
        await expect(ProductsPage.logoImg).toBeDisplayed();
    });

    it('Cart image should be displayed and clickable', async () => {
        await expect(ProductsPage.cartImg).toBeDisplayed();
        await expect(ProductsPage.cartImg).toBeClickable();
    });

    it('Page title should be displayed', async () => {
        await expect(ProductsPage.pageTitle).toHaveText('PRODUCTS');
    });

    it('Bot head image should be displayed', async () => {
        await expect(ProductsPage.botHeadImg).toBeDisplayed();
    });

    it('Filter should be clickable', async () => {
        await expect(ProductsPage.productFilter).toBeClickable();
    });

    it('Filter should display options', async () => {
        await ProductsPage.productFilter.click();
        await expect(ProductsPage.productFilter).toHaveChildren(4);
    });

    it('Filter options should be clickable', async () => {
        await ProductsPage.productFilter.click();
        await expect(ProductsPage.productFilter).toBeClickable();
    });

    it('Backpack image should be displayed', async () => {
        await expect(ProductsPage.backpackImg).toHaveAttrContaining('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    });

    it('Bike Light image should be displayed', async () => {
        await expect(ProductsPage.bikeLightImg).toHaveAttrContaining('src', '/static/media/bike-light-1200x1500.a0c9caae.jpg');
    });

    it('T-shirt image should be displayed', async () => {
        await expect(ProductsPage.tShirtImg).toHaveAttrContaining('src', '/static/media/bolt-shirt-1200x1500.c0dae290.jpg');
    });

    it('Jacket image should be displayed', async () => {
        await expect(ProductsPage.jacketImg).toHaveAttrContaining('src', '/static/media/sauce-pullover-1200x1500.439fc934.jpg');
    });

    it('Baby bodysuit image should be displayed', async () => {
        await expect(ProductsPage.babyBodysuitImg).toHaveAttrContaining('src', '/static/media/red-onesie-1200x1500.1b15e1fa.jpg');
    });

    it('Red T-shirt image should be displayed', async () => {
        await expect(ProductsPage.redTshirtImg).toHaveAttrContaining('src', '/static/media/red-tatt-1200x1500.e32b4ef9.jpg');
    });

    it('Products price should be displayed', async () => {
        await expect(ProductsPage.productsPrice).toHaveAttrContaining('class','inventory_item_price');
        await expect(ProductsPage.productsPrice).toHaveTextContaining('$');
    });

    it('Add to cart button should be displayed', async () => {
        await expect(ProductsPage.inventoryContainer).toHaveTextContaining('ADD TO CART');
    });

    it('A new tab should be displayed when clicking a product image', async () => {
        await ProductsPage.seeProduct(ProductsPage.backpackImg, 'https://www.saucedemo.com/inventory-item.html?id=4');
        await expect(ProductsPage.hambMenu).toBeDisplayed;
        await ProductsPage.seeProduct(ProductsPage.bikeLightImg, 'https://www.saucedemo.com/inventory-item.html?id=0');
        await ProductsPage.seeProduct(ProductsPage.tShirtImg, 'https://www.saucedemo.com/inventory-item.html?id=1');
        await ProductsPage.seeProduct(ProductsPage.jacketImg, 'https://www.saucedemo.com/inventory-item.html?id=5');
        await ProductsPage.seeProduct(ProductsPage.babyBodysuitImg, 'https://www.saucedemo.com/inventory-item.html?id=2');
        await ProductsPage.seeProduct(ProductsPage.redTshirtImg, 'https://www.saucedemo.com/inventory-item.html?id=3');
    });

    it('Add to cart button should changed into remove when clicked', async () => {
        await expect(ProductsPage.addBtn).toBeDisplayed();
        await ProductsPage.addBtn.click();
        await expect(ProductsPage.removeBtn).toBeDisplayed();
        await expect(ProductsPage.removeBtn).toHaveText('REMOVE');
    });

    it('Remove button should changed into add to cart when clicked', async () => {
        await expect(ProductsPage.removeBtn).toBeDisplayed();
        await ProductsPage.removeBtn.click();
        await expect(ProductsPage.addBtn).toBeDisplayed();
        await expect(ProductsPage.addBtn).toHaveText('ADD TO CART');
    });

    it('Footer should be displayed', async () => {
        await expect(ProductsPage.productsFooter).toBeDisplayed();
    });

    it('Social media icons should be displayed and clickable', async () => {
        await ProductsPage.socialMediaIcons(ProductsPage.twitterImg);
        await ProductsPage.socialMediaIcons(ProductsPage.facebookImg);
        await ProductsPage.socialMediaIcons(ProductsPage.linkedinImg);

    });

    it('Footer copyright should be displayed', async () => {
        await expect(ProductsPage.footerCopyright).toBeDisplayed();
        await expect(ProductsPage.footerCopyright).toHaveText('© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });

    it('Footer bot image should be displayed', async () => {
        await expect(ProductsPage.footerBotImg).toBeDisplayed();
    });
});